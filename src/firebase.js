import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
	apiKey: 'AIzaSyAukoHsSYyO3MK4PtRNulPoAV87spyl4ws',
	authDomain: 'fir-chat-vijay.firebaseapp.com',
	databaseURL: 'https://fir-chat-vijay.firebaseio.com',
	projectId: 'fir-chat-vijay',
	storageBucket: 'fir-chat-vijay.appspot.com',
	messagingSenderId: '914830776919',
	appId: '1:914830776919:web:5ecf78044cf75deac02112',
	measurementId: 'G-1P8B9WF6J5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
