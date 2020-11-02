export const validations = {
    email: val => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val),
    password: val => /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/.test(val),
    cpassword: (confPass, pass) => pass === confPass,
    fullname: val => !/[^A-Za-z0-9_ '-]/.test(val),
    phone: val => /^(\+\d{1,3}[- ]?)?\d{10}$/.test(val),
    role: val => val,
    check: val => val,
}
export const validator = (key, value) => {
    if(key&&!value) return false
    switch (key) {
        case 'email':
            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
        case 'name':
            return /^[a-z\.A-Z ]+$/.test(value);
        case 'phone':
            return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value);
        case 'booking_amount' :
            return /^([1-9][0-9]{0,4}|100000)$/.test(value)
        default:
            return !!value;
    }
}