import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication

// Copy & Pasted from Firebase
const config = {
    apiKey: "AIzaSyDG8bZ_Cte8Kju_PcFsiz8xV18IQULBSvQ",
    authDomain: "kessri-s-oven.firebaseapp.com",
    databaseURL: "https://kessri-s-oven.firebaseio.com",
    projectId: "kessri-s-oven",
    storageBucket: "kessri-s-oven.appspot.com",
    messagingSenderId: "626356081774",
    appId: "1:626356081774:web:5c0d4d9b39c0d67081027f",
    measurementId: "G-P7PEZYCBXL"
};

/**
 * @function createUserProfile: Records user on Firestore DB. Async API request.
 * @param userAuth:             null if user not signed in w/ Google account
 * @param additionalData:       form of Object.
 */
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    // Queries Firestore if a user already exists.
    // Firestore returns 2 types of objects: references and snapshots. Of these objects, they can be either Document or Collection versions
    // Firestore ALWAYS return these objects even if nothing exists from the query.
    // 'queryReference' object represents the current place in the database that we query. Can get them by calling either:
    // firestore.doc('/users/:userId');     or      firestore.collections('/users');
    // 'queryReference' object doesn't have the actual data of collection/document. It just has properties that tell us
    // details about it or the method to get the Snapshot object which gives us the data we're looking for.
    // Use 'documentRef' objects to: create, retrieve, update, delete        methods: .set(), .get(), .update(), .delete()
    // Use 'collectionRef' object to: add documents to collections      method: .add()
    // Can get 'snapshotObject' from 'referenceObject' using .get()
    // 'documentRef' returns 'documentSnapshot' object. 'collectionRef' returns a querySnapshot object.

    const userRef = firestore.doc(`users/${userAuth.uid}`); // userRef=docRef obj
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        // add user to Firestore
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('Creating User Failed: ', err.message);
        }
    }

    return userRef;
    //console.log(firestore.doc('users/123adf'));
};

firebase.initializeApp(config);

export const auth = firebase.auth(); //authentication
export const firestore = firebase.firestore(); //database

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
