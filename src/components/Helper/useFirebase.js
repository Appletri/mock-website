// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDQu6OtHtV8WIGMfhhofo4LwzOAePjut4Y",

  authDomain: "fake-twitch-cc9b4.firebaseapp.com",

  projectId: "fake-twitch-cc9b4",

  storageBucket: "fake-twitch-cc9b4.appspot.com",

  messagingSenderId: "626819470879",

  appId: "1:626819470879:web:e2ae162752fedb03b5e72a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let twitchInfo = {
  SECRET: null,
  ID: null
};
(async () => {
  const data = await Database('twitch-api');
  twitchInfo.SECRET = data[0].SECRET;
  twitchInfo.ID = data[0].ID;
})();

async function Database(lookup) {
  const cheatSheetCol = collection(db, lookup);
  const cheatSheetSnap = await getDocs(cheatSheetCol);
  const cheatSheet = cheatSheetSnap.docs.map(doc => doc.data());
  return cheatSheet;
}

async function twitchData () { 
  const url = `https://id.twitch.tv/oauth2/token?client_id=${twitchInfo.ID}&client_secret=${twitchInfo.SECRET}&grant_type=client_credentials`;
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);
  return results
}

export { Database, twitchData };
