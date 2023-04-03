import React from 'react'
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBCvBYPfv9gNNltZOiWp5E0eUsxree1-Ig",
    authDomain: "chatfriends-649d5.firebaseapp.com",
    projectId: "chatfriends-649d5",
    storageBucket: "chatfriends-649d5.appspot.com",
    messagingSenderId: "331692580160",
    appId: "1:331692580160:web:b517eadbdc99fec1042ea5",
    measurementId: "G-0J62F5SMHQ"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(); 

function App() {
  return (
    <div className="App">
      <header>
        
      </header>
      <setion>
        {user ? <ChatRoom /> : <SighIn />}
      </setion>
    </div>
  );
}

function SighIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithGoogle(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

function SighOut() {
  return auth.currentUser && (
    <button onClick={() => auth.sighOut()}>SighOut</button>
  )
}

function ChatRoom() {
  
}

export default App;
