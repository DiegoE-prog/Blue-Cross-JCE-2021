import validator from 'validator';

const initialErrorState = {
    username: "",
    role: "",
    name: "",
    lastname: "",
    dob: "",
    phone: "",
    email: ""
}

//Variable that stores the error values
var errorMessages = structuredClone(initialErrorState)

//Field names
const fullInputName = {
    username: "User",
    role: "Role",
    name: "Name",
    lastname: "Last name",
    dob: "DOB",
    phone: "Phone number",
    email: "E-mail"
}

const fieldName = {
    username: "user",
    role: "role",
    name: "name",
    lastname: "lastname",
    dob: "dob",
    phone: "phone",
    email: "email"
}

const userNameValidator = (name, lastname) =>
{
    //Reset error Message
    errorMessages = structuredClone(initialErrorState)

    //Name validators
    if(validateHasContent(fieldName.name, name)){
        validateAlphaOnly(fieldName.name, name)
        validateMaxCharactersLimit(fieldName.name, name, 50)
    }
    
    //Lastname validators
    if(validateHasContent(fieldName.lastname, lastname)){
        validateAlphaOnly(fieldName.lastname, lastname)
        validateMaxCharactersLimit(fieldName.lastname, lastname, 50)
    }

    //Validate that both fields are true
    if(errorMessages.name === initialErrorState.name && errorMessages.lastname === initialErrorState.lastname){
        return true
    }else{
        return false
    }
}

const addUserValidator = (user) =>
{
    //Reset error Message
    errorMessages = structuredClone(initialErrorState)

    //Make all validations

    //Role validators
    validateHasContent(fieldName.role, user.role)

    //Name validators
    if(validateHasContent(fieldName.name, user.name)){
        validateAlphaOnly(fieldName.name, user.name)
        validateMaxCharactersLimit(fieldName.name, user.name, 50)
    }
    
    //Lastname validators
    if(validateHasContent(fieldName.lastname, user.lastname)){
        validateAlphaOnly(fieldName.lastname, user.lastname)
        validateMaxCharactersLimit(fieldName.lastname, user.lastname, 50)
    }

    //DOB validators
    validateDobFormat(user.dob)

    //Phone validators
    if(validateHasContent(fieldName.phone, user.phone)){
        validatePhoneFormat(user.phone)
    }

    //Email validators
    if(validateHasContent(fieldName.email, user.email)){
        validateEmailFormat(user.email)
        validateMaxCharactersLimit(fieldName.email, user.email, 70)
    }

    //Return error object
    return errorMessages
}

const getLocalDateFormat = () =>{
    var dateRef = new Date('2023-11-28')
    var str = dateRef.toLocaleDateString(undefined, {timeZone: "UTC"})
    str=str.replace("11","MM");
    str=str.replace("2023","YYYY");
    str=str.replace("28","DD");

    return str
}

//Error validations
const errorTemplateMessage = 
{
    emptyField: " is a mandatory field",
    maxCharactersLimit: "Maximum 00 Characters are allowed",
    alphaOnly: "Only Alpha characters are allowed",
    incorrectDateFormat: "DOB is a mandatory field, the format in this field is ",
    incorrectPhoneFormat: "Only 10 numeric characters are allowed",
    incorrectEmailFormat: "E-mail required"
}

const validateHasContent = (fieldName, string) => 
{
    if(validator.isEmpty(string)){
        //Set the error message
        errorMessages[fieldName] = fullInputName[fieldName] + errorTemplateMessage.emptyField
        return false
    }

    return true
}

const validateMaxCharactersLimit = (fieldName, string, characterLimit) =>
{
    if(!validator.isByteLength(string, { max: characterLimit })){
        const limitError = errorTemplateMessage.maxCharactersLimit.replace("00", characterLimit)
        //Set the error message
        errorMessages[fieldName] = limitError
    }
}

const validateAlphaOnly = (fieldName, string) =>
{
    if(!validator.isAlpha(string)){
        //Set the error message
        errorMessages[fieldName] = errorTemplateMessage.alphaOnly
    }
}

const validateDobFormat = (date) => 
{
    if(validator.isEmpty(date)){
        //Set the error message
        errorMessages.dob = errorTemplateMessage.incorrectDateFormat + getLocalDateFormat()
    }
}

const validatePhoneFormat = (phone) => 
{
    //Validate phone length
    if(!validator.isByteLength(phone, {min: 10, max: 10 }) || !validator.isNumeric(phone)){
        //Set the error message
        errorMessages.phone = errorTemplateMessage.incorrectPhoneFormat
    }
}

const validateEmailFormat = (email) => 
{
    if(!validator.isEmail(email, {blacklisted_chars : "!#$%*?^"})){
        //Set the error message
        errorMessages.email = errorTemplateMessage.incorrectEmailFormat
    }
}

export { addUserValidator, userNameValidator }