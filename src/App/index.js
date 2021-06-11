import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
// import ProductsForm from './components/ProductForm';
import NavBar from './components/NavBar';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <>
      <Router>
      <NavBar />
      <h1>Hello World!</h1>
      </Router>
    </>
  );
}

export default App;
