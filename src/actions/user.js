import config from '../config';
const { SERVER_URL } = config();

export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILSURE';

export const login = (email, password) => {
  return {
    type: LOGIN,
    promise: {
      method: 'post',
      url: SERVER_URL + '/signin',
      data: { email, password }
    }
  };
};
