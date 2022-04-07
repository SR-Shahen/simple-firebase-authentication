
import './App.css';
import app from './firebase.init';

import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';
const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const gihubProvider = new GithubAuthProvider();

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
  const handelGithubSignIn = () => {
    signInWithPopup(auth, gihubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error(error);
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
      {user.uid ? <button onClick={handelSignOut}>Sign Out</button> : <>
        <button onClick={handelGoogleSignIn}>Google sign in</button>
        <button onClick={handelGithubSignIn}>Github Sign In</button>
      </>
      }
      <br /> <br /> <br />
      <img src={user.photoURL} alt="" />
      <h3>Name:{user.displayName}</h3>
      <p>Email:{user.email}</p>
    </div>
  );
}

export default App;
