
import colors from './colors';
import strings from './english';

const { errors, auth } = strings;

export const signupError = {
    fullname : errors.fullname,
    email : errors.email,
    phone : errors.phone,
    password : errors.password,
    cpassword : errors.cpassword,
    role : errors.role
}
export const loginErrors = {
    email : errors.emailLogin,
    password : errors.passwordLogin,
}
const rolesData = [
  { label : auth.Couple, value : 1 },
  { label : auth.Guest, value : 2 },
  { label : auth.Vendor, value : 3 },
]

export const SUFields = [
  { label : auth.FullName, key : 'fullname', maxLength : 100, type:'textfield' },
  { label : auth.EmailAddress, key : 'email', maxLength : 50, type:'textfield' },
  { label : auth.Phone, key : 'phone', maxLength : 10, type:'textfield' },
  { label : auth.Password, key : 'password', maxLength : 50, secure : true, type:'textfield' },
  { label : auth.ConfirmPassword, key : 'cpassword', maxLength : 50, secure : true, type:'textfield' },
  { label : auth.SelectYouRole, key : 'role', type:'dropdown', data:rolesData },
]

export const LFields = [
  { label : auth.EmailAddress, key : 'email', maxLength : 100, type:'textfield' },
  { label : auth.Password, key : 'password', maxLength : 100, type:'textfield', secure : true },
]

export const palette = {
    primary: {
      main: colors.main
    },
    secondary: {
      main: colors.main
    },
    white : {
      main : colors.white
    },
    danger : {
      main : colors.red
    }
  }
