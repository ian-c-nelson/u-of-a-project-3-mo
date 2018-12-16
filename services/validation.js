const invalidPassword = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
const invalidEmail = "Invalid email address.  Must use the following pattern: {characters}@{characters}.{domain}";

module.exports = {
  email: emailAddress => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    const isValid = regex.test(emailAddress);
    return {
      isValid,
      message: isValid ? "" : invalidEmail
    };
  },

  password: password => {
    const regex = /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isValid = regex.test(password);
    return {
      isValid,
      message: isValid ? "" : invalidPassword
    };
  },

  validationObject: { IsValid: true, message: "" }
};
