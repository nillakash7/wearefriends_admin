export const MEDIA_TYPE = Object.freeze({
  NONE: 0,
  IMG: 1,
  VIDEO: 2,
  VOICE: 3,
  EMOJI: 4,
  LINK: 5
});

export const POST_TYPE = Object.freeze({
  NONE: 0,
  ONLY_TEXT: 1,
  ONLY_PHOTO: 2,
  ONLY_VIDEO: 3,
  ONLY_AUDIO: 4,
  PHOTO_AND_VIDEO: 5,
  EMOJI: 6,
  BIRTHDAY: 7
});

export const CONTENT_FOR = Object.freeze({
  FEED: 1,
  CHAT: 2
});

export const FILE_FOR = Object.freeze({
  PROFILE_PICTURE: 1,
  PROFILE_COVER: 2,
  FEED_IMG: 21,
  FEED_VOICE: 22,
  FEED_VIDEO: 23,
  CHAT_IMG: 51,
  CHAT_VOICE: 52,
  CHAT_VIDEO: 53
});

export const FILE_SIZE_IN_BYTE = Object.freeze({
  MIN: 1024,
  IMG: 20971520, // 20MB
  VOICE: 20971520, // 20MB
  VIDEO: 209715200 // 200MB
});

export const NO_OF_FILE = Object.freeze({
  IMG: 5,
  VIDEO: 5,
  VOICE: 1,
  LINK: 1
});

// let map = new Map();
// map.set('key', {'value1', 'value2'});
// let values = map.get('key');

export const SUPPORTED_IMG_EXTENSION = new Map();
SUPPORTED_IMG_EXTENSION.set('.jpg', 'image/jpeg');
SUPPORTED_IMG_EXTENSION.set('.jpeg', 'image/jpeg');
SUPPORTED_IMG_EXTENSION.set('.png', 'image/png');
SUPPORTED_IMG_EXTENSION.set('.gif', 'image/gif');

export const SUPPORTED_VOICE_EXTENSION = new Map();
SUPPORTED_VOICE_EXTENSION.set('.mp3', 'audio/mpeg');
SUPPORTED_VOICE_EXTENSION.set('.aac', 'audio/vnd.dlna.adts');
SUPPORTED_VOICE_EXTENSION.set('.aac', 'audio/aac');
SUPPORTED_VOICE_EXTENSION.set('.m4a', 'audio/x-m4a');

export const SUPPORTED_VIDEO_EXTENSION = new Map();
SUPPORTED_VIDEO_EXTENSION.set('.mp4', 'video/mp4');
SUPPORTED_VIDEO_EXTENSION.set('.m4v', 'video/mp4');
SUPPORTED_VIDEO_EXTENSION.set('.3gp', 'video/3gpp');
SUPPORTED_VIDEO_EXTENSION.set('.avi', 'video/x-msvideo');
SUPPORTED_VIDEO_EXTENSION.set('.mkv', 'video/x-matroska');
SUPPORTED_VIDEO_EXTENSION.set('.flv', 'video/x-flv');
SUPPORTED_VIDEO_EXTENSION.set('.mov', 'video/quicktime');
