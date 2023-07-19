import React from 'react';
import {Link} from 'react-router-dom';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import Register from './Register';
import Loginpage from './Loginpage';
import Fab from '@mui/material/Fab';
import './App.css'
import TravelPlan from './TravelPlan';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='padding-nav'>
  
       <h1 style={{fontSize:"25px",marginLeft:"60px",marginTop:"30px"}}>Booking</h1>
       
       <Link to='/hotel' style={{color:"white", textDecoration:"none"}} className="stay">
      <HotelOutlinedIcon sx={{marginBottom:"-5px",marginLeft:"60px"}} >
      </HotelOutlinedIcon>
          Stays 
        </Link>

          <Link to='/attractions' underline='none' style={{color:"white", textDecoration:"none",marginLeft:"40px"}} className="placeicon">
      <PlaceOutlinedIcon sx={{marginBottom:"-4px"}}></PlaceOutlinedIcon>
       Attractions
       </Link>

       <Link to="/flights" underline='none' style={{color:"white", textDecoration:"none",marginLeft:"40px"}} className="fly">
      <FlightOutlinedIcon sx={{marginBottom:"-4px"}}></FlightOutlinedIcon>
       Flights
      </Link>
</div>
      <h1 style={{marginRight:"50px", textAlign:"center",color:"white",marginTop:"92px"}}>Get Rewarded For Your Travels</h1>
   <h3 style={{marginRight:"50px", textAlign:"center",color:"white"}}>Choose Your Favourite Destination.</h3>
   
   <Link to="/travelplan" style={{textDecoration:"none"}}>
   <Fab variant="extended" size="medium" style={{marginLeft:"550px"}}>
      <strong>Travel Plan</strong>
   </Fab>
   </Link>
   <Loginpage></Loginpage>
   <Register></Register>
   

    </div>
  )
}
