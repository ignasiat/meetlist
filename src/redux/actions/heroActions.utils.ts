/* eslint-disable import/prefer-default-export */
import md5 from 'md5';

export const getUrlParameters = () => {
  const ts = new Date().getTime();
  const privateKey: string = process.env.REACT_APP_PRIVATE_KEY ?? '';
  const publicKey: string = process.env.REACT_APP_PUBLIC_KEY ?? '';
  const hash = md5(ts + privateKey + publicKey).toString();
  return { ts, publicKey, hash };
};
