import firebase from 'firebase/app';
import { v4 as uuid } from 'uuid';

// must import 'firebase/storage'; in index.js
// public url of our cloud storage bucket
const prefix = 'https://storage.googleapis.com/restaurant-reservations-144e5.appspot.com/';

export const uploadFile = async (file, folderName) => {
    const fileExtension = file.type === 'image/png'
        ? '.png'
        : fileExtension === 'image/jpeg'
            ? '.jpg'
            : '';

    const filePath = folderName + '/' + uuid() + fileExtension;
    const storage = firebase.storage().ref(filePath);
    await storage.put(file);
    return prefix + filePath; // get full url of file
}