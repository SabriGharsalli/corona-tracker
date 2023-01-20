import React from "react";
import firebase from "../utils/firebaseConfig";

const Main = () => {
  return (
    <main>
      <nav>
        <h4  style={{ fontFamily:'Franklin Gothic Medium ,Arial Narrow ,Arial,sans-serif', fontSize:'2.5rem'}} >Hello <h1 style={{ color:'rgb(221,89,254)' , fontSize:'2.5rem'}}>{firebase.auth().currentUser.displayName}</h1> </h4>
      {/*   <div onClick={() => firebase.auth().signOut()}>Se déconnecter</div> */}
      </nav>
      {/* app component */}
    </main>
  );
};

export default Main;