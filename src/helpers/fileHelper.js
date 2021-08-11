import getBlobDuration from 'get-blob-duration';
import {
  CONTENT_FOR,
  FILE_FOR,
  FILE_SIZE_IN_BYTE,
  NO_OF_FILE,
  MEDIA_TYPE,
  SUPPORTED_IMG_EXTENSION,
  SUPPORTED_VIDEO_EXTENSION,
  SUPPORTED_VOICE_EXTENSION
} from '../configs/contentConfig';

const getMediaType = (fileExtension) => {
  if (SUPPORTED_IMG_EXTENSION.get(fileExtension)) return MEDIA_TYPE.IMG;
  if (SUPPORTED_VIDEO_EXTENSION.get(fileExtension)) return MEDIA_TYPE.VIDEO;
  if (SUPPORTED_VOICE_EXTENSION.get(fileExtension)) return MEDIA_TYPE.VOICE;
  return MEDIA_TYPE.NONE;
};

const getNoOfFileAllowed = (type) => {
  if (type === MEDIA_TYPE.IMG) return NO_OF_FILE.IMG;
  if (type === MEDIA_TYPE.VIDEO) return NO_OF_FILE.VIDEO;
  if (type === MEDIA_TYPE.VOICE) return NO_OF_FILE.VOICE;
  return 0;
};

const getMaxFileSize = (type) => {
  if (type === MEDIA_TYPE.IMG) return FILE_SIZE_IN_BYTE.IMG;
  if (type === MEDIA_TYPE.VIDEO) return FILE_SIZE_IN_BYTE.VIDEO;
  if (type === MEDIA_TYPE.VOICE) return FILE_SIZE_IN_BYTE.VOICE;
  return 0;
};

const getAcceptFiles = (type) => {
  if (type === MEDIA_TYPE.IMG) return [...SUPPORTED_IMG_EXTENSION.values()];
  if (type === MEDIA_TYPE.VIDEO) return [...SUPPORTED_VIDEO_EXTENSION.values()];
  if (type === MEDIA_TYPE.VOICE) return [...SUPPORTED_VOICE_EXTENSION.values()];

  return [''];
};
const getAllAcceptFiles = () => {
  return [
    ...SUPPORTED_IMG_EXTENSION.keys(),
    ...SUPPORTED_VIDEO_EXTENSION.keys(),
    ...SUPPORTED_VOICE_EXTENSION.keys()
  ];
};

const getFileForPostAndComment = (contentType) => {
  if (contentType === MEDIA_TYPE.IMG) return FILE_FOR.FEED_IMG;
  if (contentType === MEDIA_TYPE.VIDEO) return FILE_FOR.FEED_VIDEO;
  if (contentType === MEDIA_TYPE.VOICE) return FILE_FOR.FEED_VOICE;
  return '';
};

const getFileForChat = (contentType) => {
  if (contentType === MEDIA_TYPE.IMG) return FILE_FOR.CHAT_IMG;
  if (contentType === MEDIA_TYPE.VIDEO) return FILE_FOR.CHAT_VIDEO;
  if (contentType === MEDIA_TYPE.VOICE) return FILE_FOR.CHAT_VOICE;
  return '';
};

const getFileFor = (contentFor, contentType) => {
  if (contentFor === CONTENT_FOR.FEED)
    return getFileForPostAndComment(contentType);
  if (contentFor === CONTENT_FOR.CHAT) return getFileForChat(contentType);
  return '';
};

const isDurationFile = (mediaType) =>
  mediaType === MEDIA_TYPE.VIDEO || mediaType === MEDIA_TYPE.VOICE;

export const getFileInfo = (file, contentFor, callback) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    const data = {
      url: URL.createObjectURL(file),
      // base64Img: reader.result.split(',').pop(),
      fileExtension: `.${file.name.split('.').pop()}`,
      fileName: file.name,
      contentType: file.type,
      size: file.size
    };
    data.mediaType = getMediaType(data.fileExtension);
    data.fileFor = getFileFor(contentFor, data.mediaType);
    data.maxSize = getMaxFileSize(data.mediaType);
    if (isDurationFile(data.mediaType)) {
      getBlobDuration(data.url).then((duration) => {
        data.duration = duration;
        if (callback) callback(data);
      });
    } else if (callback) callback(data);
  };
  reader.readAsDataURL(file);
};

export const generateAttachments = (prevFormState, attachment, isRemoved) => {
  const attachments = prevFormState.values.attachments || [];
  if (!isRemoved) {
    attachments.push(attachment);
    return attachments;
  }

  const index = attachments.indexOf((a) => a.fileName === attachment.fileName);
  if (index < 0) return attachments;

  attachments.splice(index, 1);
  return attachments;
};

export default {
  getNoOfFileAllowed,
  getContentType: getMediaType,
  getMaxFileSize,
  getAcceptFiles,
  getFileFor,
  getPostFileFor: getFileForPostAndComment,
  getAllAcceptFiles
};
