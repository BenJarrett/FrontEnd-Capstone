import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import './App.scss';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';
import { createUser, getUserbyUid } from '../helpers/data/userData';

function App() {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid !== process.env.REACT_APP_ADMIN_UID)) {
        const userInfoObj = {
          admin: false,
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@gmail.com')[0]
        };
        getUserbyUid(authed.uid).then((response) => {
          if (Object.values(response.data).length === 0) {
            createUser(userInfoObj).then((resp) => setUser(resp));
          } else {
            setUser(userInfoObj);
          }
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);
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
