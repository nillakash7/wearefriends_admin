import { removeLoginUser } from '../helpers/storageHelper';

export async function handleResponse(response) {
  return response.data;
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // if (error.response && error.response.status >= 500) {
  //   const customError = {
  //     message: 'System is down for maintenance and will be back to work soon.'
  //   };
  //   throw customError;
  // }
  if (error.response && error.response.status === 401) removeLoginUser();
  throw error;
}
