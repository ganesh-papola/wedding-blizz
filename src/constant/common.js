
import colors from './colors';
import strings from './english';

const { errors, auth } = strings;

export const signupError = {
    fullname : errors.fullname,
    email : errors.email,
    phone : errors.phone,
    password : errors.password,
    cpassword : errors.cpassword
}
export const loginErrors = {
    email : errors.emailLogin,
    password : errors.passwordLogin,
}
export const SUFields = [
  { label : auth.FullName, key : 'fullname', maxLength : 30 },
  { label : auth.EmailAddress, key : 'email', maxLength : 50 },
  { label : auth.Phone, key : 'phone', maxLength : 10 },
  { label : auth.Password, key : 'password', maxLength : 50, secure : true },
  { label : auth.ConfirmPassword, key : 'cpassword', maxLength : 50, secure : true },
]
export const LFields = [
  { label : auth.EmailAddress, key : 'email', maxLength : 50 },
  { label : auth.Password, key : 'password', maxLength : 50, secure : true },
]

export const palette = {
    primary: {
      main: colors.main
    },
    secondary: {
      main: colors.main
    },
    white : {
      maine : colors.white
    }
  }