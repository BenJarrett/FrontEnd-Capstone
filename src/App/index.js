import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import './App.scss';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [user, setUser] = useState({});
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
        setUser(userInfoObj);
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
