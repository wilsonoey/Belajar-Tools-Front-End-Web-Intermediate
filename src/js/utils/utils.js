const Utils = {
  setUserToken(key, value) {
    return sessionStorage.setItem(key, value);
  },
  getUserToken(key) {
    return sessionStorage.getItem(key);
  },
  destroyUserToken(key) {
    return sessionStorage.removeItem(key);
  },
  setName(key, value) {
    return sessionStorage.setItem(key, value);
  },
  getName(key) {
    return sessionStorage.getItem(key);
  },
  destroyName(key) {
    return sessionStorage.removeItem(key);
  },
};

export default Utils;
