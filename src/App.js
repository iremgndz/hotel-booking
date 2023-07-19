import React from 'react'
import Navbar from './Navbar';
import Rooms from './list/Rooms'
import Attractions from './Attractions/Attractions'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import TravelPlan from './TravelPlan';
import Hotel from './Hotels/Hotel';
import Flights from './Flight/Flights';


function App() {
  
  return (
   
  <div className='App'>
   

   <BrowserRouter>
   
          <Routes>
            <Route path='/' element={<Navbar></Navbar>}></Route>
            <Route path='/rooms' element={<Rooms></Rooms>}></Route>
            <Route path='/attractions' element={<Attractions></Attractions>}></Route>
            <Route path='travelplan' element={<TravelPlan></TravelPlan>}></Route>
            <Route path='hotel' element={<Hotel></Hotel>}></Route>
            <Route path='flights' element={<Flights></Flights>}></Route>
          </Routes>
          </BrowserRouter>


  </div>
  
  );
 
}

export default App;
