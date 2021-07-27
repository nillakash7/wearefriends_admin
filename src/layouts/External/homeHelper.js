import makeStyles from '@material-ui/styles/makeStyles';

// #region Styles
export const headerStyles = makeStyles(() => ({
  root: {
    // paddingTop: '25px'
  }
}));

export const topHeaderStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.footer.background,
    padding: '10px 30px',
    height: '48px',
    zIndex: '100',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 20px'
    }
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  selectedLang: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '39px',
    '& img': {
      paddingTop: '2px',
      height: '25px',
      marginRight: '10px'
    },
    '& span': {
      color: theme.palette.white,
      fontSize: '16px'
    }
  },
  socialIcons: {
    margin: '4px 1px 0 0'
  },
  socialIcon: {
    padding: '0px 12px',
    margin: '0 2px 0 4px',
    '& svg': {
      color: theme.palette.white,
      fontSize: '18px'
    }
  }
}));

export const bottomHeaderStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 30px',
    backgroundColor: theme.palette.white,
    [theme.breakpoints.down('sm')]: {
      padding: '15px'
    }
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  headerLogo: {
    width: '80px',
    [theme.breakpoints.down('1250')]: {
      width: '60px'
    },
    [theme.breakpoints.down('960')]: {
      width: '56px',
      marginTop: '12px'
    }
  },
  smLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48px'
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '60px'
  },
  largeMenuContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  navContainer: {
    margin: '0px',
    '& li': {
      float: 'left',
      listStyle: 'none',
      margin: '0px 28px 0 0',
      [theme.breakpoints.down('1000')]: {
        margin: '0px 10px'
      },
      // [theme.breakpoints.down('md')]: {
      //   margin: '50px 5px'
      // },
      '& a': {
        color: theme.palette.black,
        fontSize: '18px',
        transition: 'all 0.45s',
        [theme.breakpoints.down('1250')]: {
          fontSize: '14px'
        }
      }
    }
  },
  authButton: {
    // fontFamily: "'Karla', sans-serif",
    background:
      'transparent linear-gradient(90deg, #902C8B 0%, #BE4E4F 47%, #CD593B 70%, #902C8B 100%) 0% 0% no-repeat padding-box',
    fontSize: '18px',
    color: theme.palette.white,
    border: '0px',
    lineHeight: '60px',
    display: 'inline-block',
    padding: '0px 30px',
    textDecoration: 'none !important',
    [theme.breakpoints.down('1250')]: {
      lineHeight: '50px',
      padding: '0px 25px'
    }
  }
}));

export const footerStyles = makeStyles((theme) => ({
  root: {},
  footer: {
    background: `${theme.palette.footer.background} 0% 0% no-repeat padding-box`,
    padding: '35px 60px',
    color: theme.palette.footer.text,
    [theme.breakpoints.down('sm')]: {
      padding: '35px 20px'
    },
    '& p': {
      // fontFamily: 'Karla, sans-serif',
      fontSize: '18px',
      lineHeight: '29px'
    }
  },
  footerHeader: {
    fontSize: '22px',
    fontWeight: 'bold'
  },
  office: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px'
  },
  link: {
    display: 'block',
    color: theme.palette.white,
    textDecoration: 'none',
    marginBottom: '5px',
    fontSize: '18px',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.light
    }
  },
  socialLinks: {
    display: 'flex',
    flexFlow: 'wrap',
    marginTop: theme.spacing(2),
    '& a': {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      border: `1px solid ${theme.palette.white}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      marginLeft: '0px',
      marginRight: '25px',
      transition: 'all 0.45s',
      '& svg': {
        color: theme.palette.white,
        fontSize: '24px'
      }
    }
  },
  copyrightSection: {
    height: '95px',
    zIndex: '100',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.footer.background,
    fontSize: '16px',
    padding: '10px 60px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 20px'
    }
  },
  copyrightText: {
    color: theme.palette.footer.text,
    fontSize: '16px',
    '& a': {
      color: theme.palette.footer.text
    }
  }
}));
// #endregion
