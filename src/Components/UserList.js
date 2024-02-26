import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import UserCard from "./UserCard";
const UserList = () => {
  //création hook useState pour stocker, manipuler via le setlistOfUser 
  //les données retournées par l'API après l'appel de GET et accessible via listOfUser
  const [listOfUser, setlistOfUser] = useState([]); 

  // Création du hooks useState avec un état error modifiable via le setError
  const [error, setError] = useState(null);

  // Création du hooks useEffect pour l'éxécution de la fonction myList une seule fois au moment du montage
  //la fonction ne sera rééexecutée que lorsque le second argument change de valeur
  useEffect(() => {
    function myList() {
      // the function to fetch data from the api
      axios
        .get("https://jsonplaceholder.typicode.com/users") //On point sur le lien de l'API contenant les données
        .then(function (response) {
          console.log(response.data);
          setlistOfUser(response.data); // Récupération des données
        })
        .catch(function (errorRep) { //gestion des erreurs
          console.log(errorRep);
          setError(error)
        });
    }

    myList();
  }, [error]);

  return (
    <div style={{backgroundColor:'white', display: "flex",justifyContent: "space-between", flexWrap: "wrap", padding:'20px', margin: "50px", rowGap: "15px",columnGap:"10px", alignItems:'center' }}>
        {listOfUser.map((value)=> (
          <UserCard key = {value.id} {...value}/>
        )
          )}
    </div>
  )

};
{/* <div key = {value.id}>
<strong>Name : </strong>{value.name}
<strong>Username : </strong>{value.username}
<strong>Email : </strong>{value.email}
<strong>Address : </strong>{value.address.city}
          </div> */}

export default UserList;
