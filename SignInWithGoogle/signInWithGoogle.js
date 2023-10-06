import firebase from 'firebase/app';
// must import 'firebase/auth'; in index.js
export const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
}