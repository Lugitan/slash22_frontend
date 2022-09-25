import { useState, useEffect } from 'react';
import firebaseinit from './firebaseinit';
import { getStorage } from "firebase/storage";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithRedirect,
    signOut
} from 'firebase/auth';



const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

export default function useFirebaseFunctions() {
    const app = firebaseinit();
    const storage = getStorage(app);

    const auth = getAuth();

    const providerGoogle = new GoogleAuthProvider();

    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    // listen for Firebase state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            authStateChanged(user);
            return () => unsubscribe();
        });
    }, [auth]);

    const signInGoogle = () => {
        signInWithRedirect(auth, providerGoogle)
            .then((result) => {
                console.log(result)
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            }
            );
        }

    const signOutCall = () => signOut(auth).then();

    return {
        authUser,
        loading,
        storage,
        signInGoogle,
        signOutCall
    };
}
