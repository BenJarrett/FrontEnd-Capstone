import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import './App.scss';
// import ProductsForm from './components/ProductForm';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@gmail.com')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <>
      <Router>
      <NavBar user={user} />
      <Routes user={user} />
      </Router>
    </>
  );
}

export default App;
