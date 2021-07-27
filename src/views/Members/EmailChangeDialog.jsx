// import React from 'react';
// import PropTypes from 'prop-types';
// import * as Yup from 'yup';
// import Typography from '@material-ui/core/Typography';

// import AppDialog from 'components/modals/AppDialog';
// import { AppForm, AppFormField, AppSubmitButton } from '../../components/forms';

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .required()
//     .email()
//     .label('Email')
// });

// const EmailChangeDialog = ({
//   state,
//   onClose,
//   submitHandler,
//   className,
//   ...rest
// }) => {
//   return (
//     <AppDialog
//       {...rest}
//       onClose={onClose}
//       isOpen={state.isEmailDialogOpen}
//       className={className}
//       title="Change Email">
//       <Typography>
//         Your are going to change email address for user:{' '}
//         {state.member ? state.member.username : ''}
//       </Typography>
//       <AppForm
//         initValues={{ email: '' }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           submitHandler(values.email);
//         }}>
//         <AppFormField name="email" label="Email" />

//         <AppSubmitButton label="Change Email" className="mt-3" />
//       </AppForm>
//     </AppDialog>
//   );
// };

// EmailChangeDialog.propTypes = {
//   className: PropTypes.string,
//   state: PropTypes.object,
//   onClose: PropTypes.func.isRequired,
//   submitHandler: PropTypes.func.isRequired
// };

// export default EmailChangeDialog;
