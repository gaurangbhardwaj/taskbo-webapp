import Cookies from "universal-cookie";

const cookies = new Cookies();

const sessionManager = {
  setDataInCookies,
  getDataFromCookies,
  removeDataFromCookies,
  setDataInLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
};

export default sessionManager;

function setDataInCookies(data, key) {
  cookies.set(key, JSON.stringify(data), { path: "/" });
}

function getDataFromCookies(key) {
  return cookies.get(key);
}

function removeDataFromCookies(key) {
  cookies.remove(key, { path: "/" });
}

function setDataInLocalStorage(data, key) {
  localStorage[key] = JSON.stringify(data);
}

function getDataFromLocalStorage(key) {
  try {
    return localStorage[key] ? JSON.parse(localStorage[key]) : false;
  } catch (err) {
    return false;
  }
}

function removeDataFromLocalStorage(key) {
  return localStorage.removeItem(key);
}
