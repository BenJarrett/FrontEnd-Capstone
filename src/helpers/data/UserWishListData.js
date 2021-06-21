import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getWishlist = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/wishlist.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const addProductToWishList = (obj, user) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/wishlist.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/wishlist/${response.data.name}.json`, body)
        .then(() => {
          getWishlist(user).then((productArray) => resolve(productArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteWishList = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/wishlist/${firebaseKey}.json`)
    .then(() => getWishlist(user).then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

export {
  addProductToWishList,
  getWishlist,
  deleteWishList
};
