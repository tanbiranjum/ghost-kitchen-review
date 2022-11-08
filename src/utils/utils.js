exports.setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

exports.getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

exports.removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};
