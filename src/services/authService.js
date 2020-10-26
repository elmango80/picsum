import storageHelper from "../helpers/storageHelper";
const key = "userLogged";
const PASS_ALLOW = "123456";

export const login = async (values) => {
  return new Promise((resolve, reject) => {
    const { username, password } = values;

    if (!username || !password) {
      reject("Debés ingresar nombre de usuario y contraseña.");

      return;
    }

    if (password !== PASS_ALLOW) {
      reject("La combinación de usuario y contraseña es incorrecta.");

      return;
    }

    storageHelper.set(username, key);

    resolve();
  });
};

export const logout = () => {
  storageHelper.removeStorage(key);
};

export const getUser = () => {
  const currentUser = storageHelper.get(key);

  return currentUser;
};

export const isAuthenticated = () => {
  const currentUser = getUser();

  return currentUser !== null;
};
