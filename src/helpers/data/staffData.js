import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getStaffList = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/user.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addStaffMember = (staff) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/user.json`, staff)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/user/${response.data.name}.json`, body)
        .then(() => {
          getStaffList().then((staffArray) => resolve(staffArray));
        });
    })
    .catch((error) => reject(error));
});

const removeStaffMember = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/user/${firebaseKey}.json`)
    .then(() => getStaffList().then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

const updateStaffMember = (staff) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/user/${staff.firebaseKey}.json`, staff)
    .then(() => getStaffList().then(resolve))
    .catch((error) => reject(error));
});

export {
  getStaffList,
  addStaffMember,
  removeStaffMember,
  updateStaffMember
};
