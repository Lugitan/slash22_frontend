import React from 'react';
import { createContext, useContext } from 'react';
import useFirebaseFunctions from './useFirebaseFunctions.js';

const firebaseUserContext = createContext({
    authUser: null,
    loading: true,
    storage: null,
    signInGoogle: async () => {},
    signOutCall: async () => {}
});

export function FirebaseUserProvider({ children }) {
    const auth = useFirebaseFunctions();
    return (
        <firebaseUserContext.Provider value={auth}>
            {children}
        </firebaseUserContext.Provider>
    );
}
// custom hook to use the authUserContext and access authUser and loading
export const useFirebase = () => useContext(firebaseUserContext);
