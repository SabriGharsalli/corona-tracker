
import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./utils/firebaseConfig";
import Main from "./component/Main";
import './App.css'
import './component/Details/popups.css'
const Auth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // !! ensure boolean
      setIsSignedIn(!!user);
      console.log(user);
    });
  }, []);

  return (
    <div className="App" style={{textAlign: 'center'}}>
      {console.log(isSignedIn)}
    {/*   <button className="Auth-btn"  onClick={() => setIsSignedIn("Log out")}>{isSignedIn}</button>  */}
      {isSignedIn ? ( 
<div>
  
<Main />
</div>
        


      ) : (
        <div className="popup">
         {/*  <button className="Auth-btn"   >Login</button> */}
         <div className="popup-inner">
            
         <h1>sign In</h1>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />     
               
                
                       
            </div>
            
            </div>
          
   
      )}
    </div>
  );
};

export default Auth;