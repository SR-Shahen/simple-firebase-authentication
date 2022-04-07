
import './App.css';
import app from './firebase.init';

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';
const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});

  const handelGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log("error", error);
      })
  }
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }
  const provider = new GoogleAuthProvider();
  return (
    <div className="App">
      {user.email ? <button onClick={handelSignOut}>Sign Out</button> : <button onClick={handelGoogleSignIn}>Google sign in</button>
      }
      <br /> <br /> <br />
      <img src={user.photoURL} alt="" />
      <h3>Name:{user.displayName}</h3>
      <p>Email:{user.email}</p>
    </div>
  );
}

export default App;
