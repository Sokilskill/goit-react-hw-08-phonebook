import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);

  return data;
};

export const deleteContactById = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
// Authorization
export const signup = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const login = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logout = async () => {
  await axios.post('/users/logout');
  clearAuthHeader();
};

export const currentUser = async persistedToken => {
  setAuthHeader(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};
