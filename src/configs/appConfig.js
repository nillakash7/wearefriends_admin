export const APP_TITLE = 'ABC SCHOOL';
export const pagingItems = [5, 10, 25, 50, 100];
export const duplicateEmailUser = 9;
export const DEFAULT_DATE_FORMAT = 'MMM DD, YYYY';
export const ROLE_ID = Object.freeze({
  ADMIN: 3,
  SUPPORT: 4
});

export const ACCOUNT_STATUS = Object.freeze({
  DEFAULT: 0,
  LOCKED: 1,
  VERIFIED: 2,
  SUSPENDED: 3,
  ARCHIVED: 4
});
export const COMPANY_CATEGORY = Object.freeze({
  ALL: 0,
  WAF: 1,
  PROSPECTIVE_PARTNER: 2,
  PARTNER: 3
});

export const usernameRegex = '^[a-zA-Z0-9]+$';
export const stringRegex = '[a-zA-Z0-9 ]+$';
export const walletAddressRegex = '^0x[a-fA-F0-9]{40}$';
export const PANRegex = '^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$';
export const phoneCodeSeparator = '-';
export const phoneNumberRegex = '\\d+'; // '^\\+?\\d{0,13}'; '[\\+]\\d{1,3}[\\-]\\d{8,11}'; //'^\\+?\\d{0,13}';
// export const phonePlaceholder = '+999-99999999';
export const defaultPageSize = 50;
export const defaultPageNo = 0;
export const languageId = 1;
export const maxUploadFileSizeInByte = 5242880;
export const supportedImages = 'image/png, image/gif, image/jpg, image/jpeg';

export const IMAGE_URLS = Object.freeze({
  LOGO: '/images/logo.png',
  SIGN_IN_UP: '/images/auth/sign_in_up.png',
  FORGET_RESET_PASSWORD: '/images/auth/forgot_reset_password.png',
  SIGN_UP_DONE: '/images/auth/sign_up_done.png',
  CONTACT_US_HEADER_BG: '/images/auth/contact_us_header.png'
});

export const APP_ICONS = Object.freeze({
  GALLERY: '/icons/gallery.svg',
  RECORDING: '/icons/recording.svg'
});

export const POST_TYPE = Object.freeze({
  NONE: 0,
  MEDIA: 1,
  AUDIO: 2
});

export const SOCIAL_LINKS = Object.freeze({
  FACEBOOK: 'https://www.facebook.com/smscom',
  TWITTER: 'https://twitter.com/smscom',
  LINKEDIN: 'https://www.linkedin.com/company/smscom',
  INSTAGRAM: 'https://www.instagram.com/smscom',
  TELEGRAM: 'https://t.me/smscom',
  YOUTUBE: 'https://www.youtube.com/channel/UCih4zFJ8ji69NgsPyhunErQ'
});

export const shareTypes = Object.freeze({
  email: 'email',
  facebook: 'facebook',
  linkedin: 'linkedin',
  googlePlus: 'google-plus',
  twitter: 'twitter',
  whatsapp: 'whatsapp',
  link: 'link'
});

export const socialLinks = [
  {
    title: 'Facebook',
    className: 'fab fa-facebook-f',
    url: SOCIAL_LINKS.FACEBOOK
  },
  {
    title: 'Twitter',
    className: 'fab fa-twitter',
    url: SOCIAL_LINKS.TWITTER
  },
  {
    title: 'Instagram',
    className: 'fab fa-instagram',
    url: SOCIAL_LINKS.INSTAGRAM
  },
  {
    title: 'Linkedin',
    className: 'fab fa-linkedin-in',
    url: SOCIAL_LINKS.LINKEDIN
  },
  {
    title: 'Telegram',
    className: 'fab fa-telegram-plane',
    url: SOCIAL_LINKS.TELEGRAM
  }
  // {
  //   title: 'Youtube',
  //   className: 'fab ',
  //   url: SOCIAL_LINKS.YOUTUBE
  // }
];

export const systemDownMsg = '';
export const loginDownMsg =
  'The login to sms portal is under maintenance. The sms team is working hard to get it back soon.';

// export const youtubeIFrameStyle =
//   '<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>';
