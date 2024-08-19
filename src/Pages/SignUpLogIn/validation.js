const containsSpecialCharacters = (str) => {
  const regex = /[^a-zA-Z0-9]/;
  return regex.test(str);
};

const oneOfEach = (str) => {
  // const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/;
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return regex.test(str);
};

export const validateUsername = (username) => {
  let usernameError = "";

  if (!username) {
    usernameError += "Username Required. ";
  }
  if (username.length < 3) {
    usernameError += "Username must be at least 3 characters. ";
  }
  if (username.length > 20) {
    usernameError += "Username must be at most 20 characters. ";
  }
  if (containsSpecialCharacters(username)) {
    usernameError += "Username must not contain special characters. ";
  }

  return usernameError;
};

export const validatePassword = (password) => {
  let passwordError = "";

  if (!password) {
    passwordError += "Password Required. ";
  }
  if (password.length < 8) {
    passwordError += "Password must be at least 8 characters. ";
  }
  if (password.length > 20) {
    passwordError += "Password must be at most 20 characters. ";
  }
  if (!oneOfEach(password)) {
    passwordError +=
      "Password must contain 1 lowercase, uppercase, number and special character. ";
  }

  return passwordError;
};
