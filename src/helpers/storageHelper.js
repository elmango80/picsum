export const set = (data, key) =>
  window.localStorage.setItem(key, JSON.stringify(data));

export const get = (key) => JSON.parse(window.localStorage.getItem(key));

export const remove = (key) => window.localStorage.removeItem(key);

export default {
  set,
  get,
  remove,
};
