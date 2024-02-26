import React from "react";
import { Card, CardBody } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

//Destructuration des données
const UserCard = (props) => {
  const { id,name, username, email, address, phone, website,company:{name : nameCompany, catchPhrase, bs}} = props;
  const { city, geo, street, suite, zipcode } = address;
  const { lat, lng } = geo;
  // const { nameCompany, catchPhrase, bs } = company;
  return (
    <div >
      <Card className="Card" style={{ width: '25rem', backgroundColor: '#00153e', color: 'white' }}>
        <h3 > Information </h3>
        <CardBody>
       
        <h5 style={{color:'gold', paddingTop:'10px', textDecoration:'underline'}}><strong> <FontAwesomeIcon icon="fa-solid fa-address-card" /> User N° : </strong>{id}</h5>
            <strong>Name : </strong>{name}<br/>
            <strong>Username : </strong>{username}<br/>
            <strong>Email : </strong>{email}<br/>
            <FontAwesomeIcon icon="fa-solid fa-mobile-screen" />{" "}: {" "} {phone}<br/>
            <FontAwesomeIcon icon="fa-solid fa-globe" /><strong> Website : </strong>{website}
            
            <h6 style={{color:'goldenrod', paddingTop:'10px', textDecoration:'underline'}}><strong><FontAwesomeIcon icon="fa-solid fa-location-dot" /> Address : </strong></h6>
            <li> <strong>City : </strong>{city}</li>
            <li> <strong>street :</strong> {street} </li>
            <li> <strong>suite :</strong> {suite} </li>
            <li> <strong>zipcode :</strong> {zipcode} </li>
            <li> <strong>Geo : </strong> <strong style={{fontStyle:'italic'}}>lat :</strong> {lat}  <strong style={{fontStyle:'italic'}}>lng :</strong> {lng} </li>

            <h6 style={{color: 'goldenrod',paddingTop:'10px',textDecoration:'underline'}}><FontAwesomeIcon icon="fa-solid fa-building" /><strong>  Company : </strong></h6>
            <li> <strong>name : </strong> {nameCompany} </li>
            <li> <strong>bs : </strong> {bs} </li>
            <li> <strong>catchPhrase : </strong> {catchPhrase} </li>
        </CardBody>
      </Card>
    </div>  
  );
};

export default UserCard;
