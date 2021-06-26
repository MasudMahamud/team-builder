import logo from './logo.svg';
import './App.css';
import {fakeData} from './Components/fakeData/fakeData';
import { useEffect, useState } from 'react';
import Person from './Components/Persons/Person';
import Cart from './Components/Cart/Cart'

function App() {
  const [teams, setTeams] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect( ()=> {
    setTeams(fakeData);
  } ,[])

  const handleAddMember = (team)=> {
    const newCart = [...cart, team];
    setCart(newCart);
   // console.log(setCart)
  }

  return (
    <div className="App">
      <h1> Total Member: 15 </h1>
      <h2> Add team: {cart.length} </h2>
      
      <Cart cart={cart}></Cart> 
       
        <ul>
         { teams.map(team => <Person team={team} handleAddMember={handleAddMember} > </Person> )}
        </ul>
        
    </div>
  );
}

export default App;
