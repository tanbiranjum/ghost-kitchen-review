exports.setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

exports.getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

exports.removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

exports.truncateString = (str) => {
  if (str.length > 100) {
    return str.substring(0, 100) + "...";
  }
  return str;
};
