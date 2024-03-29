export const validations = {
    email: val => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val),
    password : val => /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/.test(val),  
    cpassword : (confPass, pass) => pass===confPass,
    fullname : val => !/[^A-Za-z0-9_ '-]/.test(val),
    phone : val => !/[^A-Za-z0-9_ '-]/.test(val),
    check : val => val 
}