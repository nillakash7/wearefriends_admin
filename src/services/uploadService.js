import axios from 'axios';
import appHttp from './httpService';

const initUpload = async (fileInfo) => {
  const initData = {
    fileExtension: fileInfo.fileExtension,
    contentType: fileInfo.contentType,
    fileFor: fileInfo.fileFor,
    fileSizeInByte: fileInfo.size
  };
  const url = '/FileUpload/InitUpload';
  return appHttp.post(url, initData);
};

const getPresignedUrl = async (data) => {
  // Request
  const pData = {
    fileName: data.fileName,
    uploadID: data.uploadID,
    partNumber: data.partNumber,
    contentType: data.contentType,
    fileFor: data.fileFor
  };

  // {
  //     "isSuccess": true,
  //     "messageCode": 0,
  //     "message": "",
  //     "developerMessage": "",
  //     "data": "https://s3.amazonaws.com/img.wearefriends.today/profile_pictures/67364be9-72dc-493b-be60-4823e90e7601.png?uploadId=LpooCWIh3PeQ6CvOVaqQ83Tu5Rtr_MBgTCyESjktw2st8YZDkYlvxX5TDcF3ItlHBJZhasJS7ehTm1Uc.KX2IGsWBv0HCW6aCKjRhxd2foXVHkpZIC6uxHt8DFi7b3Zn&partNumber=1&AWSAccessKeyId=AKIAYXQIR57QPDK3LE3O&Expires=1619817943&Signature=CF%2BuKVPJ48suRZhL6Pt5yaR6tss%3D"
  // }
  const url = '/FileUpload/GetPresignedUrl';
  const resp = await appHttp.post(url, pData);
  return resp.data;

  //     "data": {
  //         "uploadID": "LpooCWIh3PeQ6CvOVaqQ83Tu5Rtr_MBgTCyESjktw2st8YZDkYlvxX5TDcF3ItlHBJZhasJS7ehTm1Uc.KX2IGsWBv0HCW6aCKjRhxd2foXVHkpZIC6uxHt8DFi7b3Zn",
  //         "fileName": "67364be9-72dc-493b-be60-4823e90e7601.png",
  //         "url": "https://s3.amazonaws.com/cdn.wearefriends.today/profile_pictures/b1037698-f8c8-4f29-ae16-263702afb551.png?uploadId=6UcxTjsGg6_L.sNCmzI08f83TheZaswntZXJ4sEyuXV3ghMXyY7oKWhw4jTTyLBnqSc8Csc_rZft_JQxTzWz91xOgsfIltjQUuskEU3KHMayBS0gGwKeAb1JKqxuUaDa&partNumber=1&AWSAccessKeyId=AKIAYXQIR57QNRVHVXMR&Expires=1620221462&Signature=T6xigTBc9PlAaizrsSjcq9onLGE%3D"
  //     }
};

const uploadToCloud = async (fileInfo, initInfo) => {
  const FILE_CHUNK_SIZE = 10485760; // 10MB
  const promises = [];

  const blob = await (await fetch(fileInfo.url)).blob();
  const noOfParts = Math.ceil(fileInfo.size / FILE_CHUNK_SIZE);

  for (let partNo = 0; partNo < noOfParts; partNo += 1) {
    const start = partNo * FILE_CHUNK_SIZE;
    const end = (partNo + 1) * FILE_CHUNK_SIZE;
    const blobPart = blob.slice(start, end);
    let psUrl = initInfo.url;
    if (partNo > 0) {
      const data = {
        fileName: initInfo.fileName,
        uploadID: initInfo.uploadID,
        partNumber: partNo + 1,
        contentType: fileInfo.contentType,
        fileFor: fileInfo.fileFor
      };

      // eslint-disable-next-line no-await-in-loop
      psUrl = await getPresignedUrl(data);
    }

    promises.push(
      axios.put(psUrl, blobPart, {
        headers: { 'Content-Type': fileInfo.contentType }
      })
    );
  }

  const resParts = await Promise.all(promises);
  return resParts.map((res, index) => ({
    partNumber: index + 1,
    eTag: res.headers.etag.replaceAll('"', '')
  }));
};

const completeUpload = async (data, parts) => {
  const cData = {
    fileName: data.fileName,
    uploadID: data.uploadID,
    fileFor: data.fileFor,
    parts
  };

  // Response:

  // {
  //   "isSuccess": true,
  //   "messageCode": 0,
  //   "message": "string",
  //   "developerMessage": "",
  //   "data": "67364be9-72dc-493b-be60-4823e90e7601.png"
  // }

  const url = '/FileUpload/CompleteUpload';
  const resp = await appHttp.post(url, cData);
  return resp.data;
};

function deleteUpload(data) {
  const dData = {
    fileName: data.fileName,
    uploadID: data.uploadID,
    fileFor: data.fileFor
  };
  const url = '/FileUpload/DeleteUpload';
  return appHttp.post(url, dData);
}

const uploadFile = async (fileInfo) => {
  if (!fileInfo) return '';

  // init
  const initResp = await initUpload(fileInfo);
  if (!initResp.isSuccess) throw initResp;
  const uploadInfo = initResp.data;

  // const uploadInfo = {
  //   fileName: '29d3bffe-158a-420a-b949-42016b5ad030.png',
  //   uploadID:
  //     '15icFaReYzrigB1OGaKLPqNGWhAFWq0Ag0UIfQ8SzY4KpYZhcsMptPdytPxQxo8AbDPOB3I02cYWc2zL4Mch1ZLNoWcHC.GS7Q.znCHGiinlwlIloe3Meg6C7S0DwU7m',
  //   url: 'https://s3.amazonaws.com/cdn.wearefriends.today/feed_images/1/29d3bffe-158a-420a-b949-42016b5ad030.png?uploadId=15icFaReYzrigB1OGaKLPqNGWhAFWq0Ag0UIfQ8SzY4KpYZhcsMptPdytPxQxo8AbDPOB3I02cYWc2zL4Mch1ZLNoWcHC.GS7Q.znCHGiinlwlIloe3Meg6C7S0DwU7m&partNumber=1&AWSAccessKeyId=AKIAYXQIR57QNRVHVXMR&Expires=1627644020&Signature=jeHisIN1HPnRMyAkKHu2p4NzvF4%3D'
  // };
  try {
    const parts = await uploadToCloud(fileInfo, uploadInfo);
    const cData = { ...uploadInfo, fileFor: fileInfo.fileFor };
    const fileName = await completeUpload(cData, parts);
    return fileName;
  } catch (error) {
    await deleteUpload({ ...uploadInfo, fileFor: fileInfo.fileFor });
    // console.log(error);
    throw error;
  }
};

const uploadFiles = async (files) => {
  if (!files || files.length === 0) return [];

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    // eslint-disable-next-line no-await-in-loop
    file.cloudFileName = await uploadFile(file);
  }

  return files;
};

export default {
  uploadFiles,
  initUpload,
  getPresignedUrl,
  completeUpload,
  deleteUpload
};
