import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, regularUser => {
            setUser(regularUser);
            console.log('regular user', regularUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

   const authData = {
         user,
         loading,
         createUser,
         signIn,
         logOut
   }


    return (
        <AuthContext.Provider value={authData}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;