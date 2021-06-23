import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/user.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createUser = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/user.json`, userObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/user/${response.data.name}.json`, body)
        .then(() => {
          getUsers().then((userArray) => resolve(userArray));
        });
    }).catch((error) => reject(error));
});

const getUserbyUid = (uid) => new Promise((resolve, reject) => {
  console.warn(uid);
  axios.get(`${dbURL}/user.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getSingleUser = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/user/${firebaseKey}.json`)
    .then((response) => resolve(response.data.uid))
    .catch((error) => reject(error));
});
export {
  createUser,
  getUsers,
  getUserbyUid,
  getSingleUser
};
