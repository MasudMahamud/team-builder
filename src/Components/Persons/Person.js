import React, { useState } from 'react';
import './Person.css';

const Person = (props) => {
  // console.log(props);
    const { name, picture, balance, age, company, phone} = props.team;
    const handleAddMember = props.handleAddMember;
    const [mobile, setMobile] = useState('');

    const showPhoneNumber =()=> setMobile(phone);
    
    return (
        <div className="user-info">
            <div className="half-image">
               <img src={picture} alt="" />
            </div>
           
            <div className="half-text">
                <h3>{name} - <small>{age}</small></h3>
                <h4>company : {company}</h4>
                <h5>Balance : {balance}</h5>
                <h5>Phone : {mobile}</h5>
                
               

                <button onClick={showPhoneNumber} > Show number </button>
                <button onClick={()=>handleAddMember(props.team)} > Add Team </button>
            </div>
 
           
        </div>
    );
};

export default Person;