import makeStyles from '@material-ui/styles/makeStyles';

// eslint-disable-next-line import/prefer-default-export
export const loginStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.white
  },
  part: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  },
  partContent: {
    position: 'absolute',
    margin: '0',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  appLogo: {
    width: '100px'
  },
  formContainer: {
    padding: '30px'
  },
  titleTxt: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0D2335',
    fontSize: '30px',
    // fontFamily: 'Gilroy-Bold',
    background: '#FAFAFA',
    borderLeft: '3px solid #983280',
    borderRight: '3px solid #983280',
    lineHeight: '73px',
    marginTop: '24px',
    marginBottom: '40px'
  },
  joinContainer: {
    color: '#253144',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    fontSize: '18px'
    // fontFamily: 'Karla'
  },
  signup: {
    color: '#983280',
    fontWeight: 'bold'
  },
  separator: {
    position: 'relative',
    background: '#983280',
    height: '1px',
    width: '100%',
    marginTop: '35px',
    display: 'flex',
    justifyContent: 'center',
    '& span': {
      position: 'absolute',
      marginTop: '-11px',
      backgroundColor: theme.palette.white,
      padding: '0 20px'
    }
  },
  forgetTxtContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25px'
  },
  forgetPassword: {
    color: '#253144',
    marginTop: '20px',
    fontSize: '18px'
    // fontFamily: 'Karla'
  },
  formBtn: {
    // fontFamily: "'Karla', sans-serif",
    fontWeight: 'bold',
    background:
      'transparent linear-gradient(90deg, #902C8B 0%, #BE4E4F 47%, #CD593B 70%, #902C8B 100%) 0% 0% no-repeat padding-box',
    display: 'inline-block',
    color: '#fff',
    border: '0px',
    marginTop: '24px',
    lineHeight: '20px',
    padding: '20px',
    fontSize: '18px',
    [theme.breakpoints.down('450')]: {
      padding: '15px'
    }
  }
}));
