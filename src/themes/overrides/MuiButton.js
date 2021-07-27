import palette from '../palette';

export default {
  root: {
    fontFamily: "'Montserrat', sans-serif"
  },
  contained: {
    boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14)',
    '&:hover': {
      // boxShadow: colors.grey[300]
    }
  },
  containedPrimary: {
    color: palette.primary.contrastText,
    backgroundColor: palette.primary.main,
    // boxShadow: '0 1px 1px 0 #dcb644',
    '&:hover': {
      backgroundColor: palette.primary.dark
      // boxShadow: '0 1px 1px 0 #078e82eb'
    }
  }
};
