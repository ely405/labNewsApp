import * as firebase from 'firebase';

import firebaseConfig from '../../firebase-config';

const config = {
	apiKey: firebaseConfig.development.API_KEY,
	authDomain: firebaseConfig.development.AUTH_DOMAIN,
	databaseURL: firebaseConfig.development.DATABASE_URL,
	projectId: firebaseConfig.development.PROYECT_ID,
	storageBucket: firebaseConfig.development.STORAGE_BUCKET,
	messagingSenderId: firebaseConfig.development.MESSAGING_SENDER_ID,
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}