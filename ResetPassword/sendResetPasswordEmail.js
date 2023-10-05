import firebase from 'firebase/app';
// This is for username and password only
export const sendResetPasswordEmail = async emailAddress => {
    await firebase.auth().sendPasswordResetEmail(emailAddress);
}