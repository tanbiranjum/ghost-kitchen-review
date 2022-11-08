exports.setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

exports.getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

exports.removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

exports.truncateString = (str, num) => {
  if (num > str.length) {
    str.slice(num);
    return str.append("...");
  } else if (num < 3) {
    str.slice(3);
    return str.append("...");
  } else {
    return "This is not a string";
  }
};
