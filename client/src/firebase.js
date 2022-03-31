import {useEffect, useState} from 'react'

import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth'
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

const firebaseConfig = {
    apiKey: "AIzaSyBt_LRbGprzAilyi1TpV1mrZbecTh1IPwg",
    authDomain: "nenyos-users-database.firebaseapp.com",
    projectId: "nenyos-users-database",
    storageBucket: "nenyos-users-database.appspot.com",
    messagingSenderId: "660701591062",
    appId: "1:660701591062:web:067a7c2ca27e24a62f6737",
    measurementId: "G-B991D6FZJ9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const storage = getStorage();


// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LdgYSkfAAAAACfwzAU0j-Y_H7fDbZ5i946pXIYe'),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
});

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

// Custom Hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        return onAuthStateChanged(auth, user => setCurrentUser(user));
    }, [])

    return currentUser;
}

// Storage
export async function upload(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, {photoURL});

    setLoading(false);
    alert("Uploaded file!");
}