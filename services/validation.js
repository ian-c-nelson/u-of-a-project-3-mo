/* eslint-disable no-restricted-globals */
const invalidPassword =
  "Passwords must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters total.";
const invalidEmail =
  "Invalid email address.  Must use the following pattern: {characters}@{characters}.{domain}.";
const invalidMileage = "Mileage must be a positive integer.";
const invalidYear =
  "Vehicle Year must be a four digit integer greater than 1900.";
const invalidVinNumber =
  "A valid VIN must be 17 characters, and can not include the letters I (i), O (o), or Q (q).";

function stripNonNumeric(str) {
  return str.toString().replace(/[^0-9\.]+/g, "");
}

function isPositiveInteger(str) {
  const s = str.toString().replace(/[^0-9\.]+/g, "");
  const n = Math.floor(Number(s));
  return n !== Infinity && String(n) === s && n >= 0;
}

function validateEmail(emailAddress) {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  const isValid = regex.test(emailAddress);
  return {
    isValid,
    message: isValid ? "" : invalidEmail
  };
}

function validateMileage(mileage) {
  const isValid = isPositiveInteger(mileage.toString());
  return {
    isValid,
    message: isValid ? "" : invalidMileage
  };
}

function validatePassword(password) {
  const regex = /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const isValid = regex.test(password);
  return {
    isValid,
    message: isValid ? "" : invalidPassword
  };
}

function validateYear(year) {
  const y = year.toString();
  const isValid =
    y.length === 4 && isPositiveInteger(y) && parseInt(y, 10) > 1900;
  return {
    isValid,
    message: isValid ? "" : invalidYear
  };
}

function validateCredentials(credentials) {
  const results = {
    isValid: true,
    messages: []
  };

  if (!credentials.email) {
    results.isValid = false;
    results.message.push("Email is required.");
  }

  const emailValidation = validateEmail(credentials.email);
  if (!emailValidation.isValid) {
    results.isValid = false;
    results.message.push(emailValidation.message);
  }

  if (!credentials.password) {
    results.isValid = false;
    results.message.push("Password is required.");
  } else {
    const passwordValidation = validatePassword(credentials.password);
    if (!passwordValidation.isValid) {
      results.isValid = false;
      results.message.push(emailValidation.message);
    }
  }

  if (!credentials.passwordConfirmation) {
    results.isValid = false;
    results.message.push("Password Confirmation is required.");
  } else {
    if (credentials.password !== credentials.passwordConfirmation) {
      results.isValid = false;
      results.message = "Password and Password Confirmation must match.";
    }
    const passwordConfirmationValidation = validatePassword(
      credentials.passwordConfirmation
    );
    if (!passwordConfirmationValidation.isValid) {
      results.isValid = false;
      results.message.push(emailValidation.message);
    }
  }

  return results;
}

function validateVinNumber(vinNumber) {
  const v = vinNumber.toString().toUpperCase();
  const isValid =
    v.length === 17 &&
    v.indexOf("I") === -1 &&
    v.indexOf("Q") === -1 &&
    v.indexOf("O") === -1;

  return {
    isValid,
    message: isValid ? "" : invalidVinNumber
  };
}

module.exports = {
  stripNonNumeric,
  validateCredentials,
  validateEmail,
  validateMileage,
  validatePassword,
  validateVinNumber,
  validateYear,
  validationObject: { isValid: true, message: "" }
};
