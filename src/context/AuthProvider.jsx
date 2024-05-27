import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';
import axios from "axios";


//authProvider
export const AuthContext = createContext(null)
// firebase auth
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  //auth
  const auth = getAuth(app);

  // user state
  const [user, setUser] = useState(null)

  // loading state
  const [loading, setLoading] = useState(false)

  //google signIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // logOut
  const logOut = () =>{
    return signOut(auth)
  }

  // signUp
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // logIn
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  //update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  // check user signIn
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      // token get from user
      if(currentUser && currentUser?.email){
        const email = currentUser.email;
        axios.post('http://localhost:5000/jwt', {email})
        .then((data) => {
          if(data.status === 200){
          //token set
          const token = data.data.token;
          localStorage.setItem('token', token);
          setLoading(false)
          }
        })
      }else{
        //token removed
        localStorage.removeItem('token');
      }
      
    })

    return () => {
      return unsubscribed()
    }
  },[])

  // user info
  const userInfo = {user, loading, signUp, logIn, updateUserProfile, googleSignIn, logOut}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;