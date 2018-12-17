const invalidPassword =
  "Passwords must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters total.";
const invalidEmail =
  "Invalid email address.  Must use the following pattern: {characters}@{characters}.{domain}.";

function validateEmail(emailAddress) {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  const isValid = regex.test(emailAddress);
  return {
    isValid,
    message: isValid ? "" : invalidEmail
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

module.exports = {
  validateCredentials,
  validateEmail,
  validatePassword,
  validationObject: { isValid: true, message: "" }
};
