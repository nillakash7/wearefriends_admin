import makeStyles from '@material-ui/styles/makeStyles';

// eslint-disable-next-line import/prefer-default-export
export const tableStyles = makeStyles((theme) => ({
  root: {
    '& .MuiCardActions-root': {
      padding: '0'
    },
    '& .MuiTableSortLabel-icon': {
      color: `${theme.palette.white}`
    }
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 300
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  countryColumn: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center'
  }
}));

export const searchPanelStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    justify: 'center'
  },
  spaceBtw: {
    paddingRight: theme.spacing(1)
  },
  buttonContainer: {
    marginTop: theme.spacing(2)
  },
  drpWith: {
    minWidth: '210px'
  },
  wdt2: {
    minWidth: '90px'
  }
}));
