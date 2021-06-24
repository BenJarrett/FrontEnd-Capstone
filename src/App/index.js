import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';
import { createUser, getUserbyUid } from '../helpers/data/userData';

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@gmail.com')[0]
        };
        getUserbyUid(authed.uid).then((response) => {
          if (Object.values(response.data).length === 0) {
            userInfoObj.adminAccess = false;
            createUser(userInfoObj).then((resp) => setUser(resp));
          } if (Object.values(response.data)[0].adminAccess === true) {
            userInfoObj.adminAccess = true;
            setUser(userInfoObj);
            setAdmin(userInfoObj);
          } if (Object.values(response.data)[0].adminAccess === false) {
            userInfoObj.adminAccess = false;
            setUser(userInfoObj);
          }
        });
      } else if (user || user === null) {
        setUser(false);
        setAdmin(false);
      }
    });
  }, []);
  console.warn(user, admin);
  return (
    <>
      <Router>
      <NavBar
      user={user}
      admin={admin} />
      <Routes
      user={user}
      admin={admin} />
      </Router>
    </>
  );
}

export default App;
