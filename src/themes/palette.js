import { colors } from '@material-ui/core';

const wh = '#FFF';
const bk = '#000';
const tpt = 'transparent';
const light = '#82ece3';
const main = '#24a699';
const dark = '#034842';
export default {
  white: wh,
  black: bk,
  transparent: tpt,
  red: colors.red,

  yellow: colors.yellow, // '#f3c408',
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  primary: {
    // contrastText: white,
    main,
    dark,
    light
  },
  secondary: {
    // contrastText: white,
    main: colors.blue.A700,
    dark: colors.blue[900],
    light: colors.blue.A400
  },
  error: {
    // contrastText: white,
    main: colors.red[600],
    dark: colors.red[900],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
    light: 'lightgray',
    darkBlue: '#071E54'
  },
  background: {
    default: wh, // #ebebeb
    main,
    dark,
    light,
    dialog: '#B2B2B2',
    paper: wh,
    media: 'lightgray',
    secondary: 'lightgray',
    avatar: '#d8d1d1',
    success: colors.green[600],
    error: colors.red[400],
    info: colors.blue[900],
    warning: colors.amber[700]
  },
  border: {
    default: '#F4F6F8', // #ebebeb
    paper: wh,
    media: 'lightgray'
  },
  footer: {
    text: '#E5E5E5',
    background: '#253144'
  },
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  divider: colors.grey[200]
  // blueYellowTC: '#066b96',
  // purpleTC: white,
  // blueTC: '#092443',
  // violet: '#50253e',
  // violetYellow: '#f9e04a',
  // violetHeading: '#50253e',
  // premiumBlue: '#2A96FE',

  // homeTitle: '#ee5928',
};
