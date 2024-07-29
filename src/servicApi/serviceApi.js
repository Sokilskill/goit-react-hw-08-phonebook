import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

const setAuthHeader = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.authorization = '';
};

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await instance.post('/contacts', contact);

  return data;
};

export const deleteContactById = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

// Authorization
export const signup = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const login = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logout = async () => {
  await instance.post('/users/logout');
  clearAuthHeader();
};

export const currentUser = async persistedToken => {
  setAuthHeader(persistedToken);
  const { data } = await instance.get('/users/current');
  return data;
};
