import { firebase } from "./db_config";

export const initSession = (email: string, password: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
};
