import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  // User Login With Google
  const signinWithGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => setUser(result))
      .catch((err) => console.log(err))
      .finally(()=>{
        setIsLoading(false);
        window.location.reload();
      });
      
  };
  // User Login with Email
  const signUpWithEmail = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => { setUser(result.user) })
      .catch((err) => alert(err.message))
      .finally(()=>{ 
        setIsLoading(false);
        window.location.reload();
       });
  };

  const signInWithEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => { setUser(result.user) })
      .catch((error) => {
        let errorMessage = error.message.split("(")[1].split(")")[0];
        alert(errorMessage);
      })
      .finally(()=>{ 
        setIsLoading(false);
        window.location.reload();
       });
  };

  // User Logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
       })
      .catch((error) => { alert(error.message)})
      .finally(()=>{ setIsLoading(false) });
  };

  // User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  
  return {
    user,
    signinWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logOut,
    isLoading,
  };
};

export default useFirebase;
