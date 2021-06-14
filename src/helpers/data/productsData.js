import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getProducts = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/products.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getOnSaleProducts = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/products.json?orderBy="onSale"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getChosenStaffPicks = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/products.json?orderBy="staffPick"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addProduct = (product) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/products.json`, product)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/products/${response.data.name}.json`, body)
        .then(() => {
          getProducts().then((productArray) => resolve(productArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteProduct = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/products/${firebaseKey}.json`)
    .then(() => getProducts().then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

const updateProduct = (product) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/products/${product.firebaseKey}.json`, product)
    .then(() => getProducts().then(resolve))
    .catch((error) => reject(error));
});

export {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getOnSaleProducts,
  getChosenStaffPicks
};
