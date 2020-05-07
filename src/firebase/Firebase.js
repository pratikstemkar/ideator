import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import cogoToast from 'cogo-toast';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        // Helper
        this.fieldValue = app.firestore.FieldValue;
        this.emailiAuthProvider = app.auth.EmailAuthProvider;

        // Firebase APIs
        this.auth = app.auth();
        this.db = app.firestore();

        // Social SIGN IN Provider
        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    // AUTH API
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
 
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
        
    doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);
    
    doSignOut = () => {
        this.auth.signOut();
        cogoToast.success('Logged Out Successfully');
    };
    
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // Merge Auth & DB User API

    onAuthUserListener = (next, fallback) => 
        this.auth.onAuthStateChanged(authUser => {
            if(authUser) {
                this.user(authUser.uid)
                    .get()
                    .then(snapshot => {
                        const dbUser = snapshot.data();

                        // Default Empty Roles
                        if(!dbUser.roles){
                            dbUser.roles = {};
                        }

                        // Merge Auth & DB User
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                            ...dbUser,
                        };

                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***
    user = uid => this.db.doc(`users/${uid}`);
    users = () => this.db.collection('users');
        
}

export default Firebase;