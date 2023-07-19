import React from 'react'
import {Link} from 'react-router-dom';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import './Attractions/attractions.css'
function AttractionsNavbar() {
  return (
    <div className='navbarr'>
      <div className='padding-nav'>
       <Link style={{textDecoration:"none"}} to='/'>
       <h1 style={{fontSize:"25px",color:"white",paddingLeft:"20px"}}>Booking</h1>
       </Link>
       <Link to='/hotel' style={{color:"white", textDecoration:"none" }} className="stay">
      <HotelOutlinedIcon sx={{float:"left",marginBottom:"-20px",marginLeft:"23px"}} >
      </HotelOutlinedIcon>
          Stays 
        </Link>

          <Link to='/attractions' underline='none' style={{color:"white", textDecoration:"none",paddingLeft:"15px"}} className="placeicon">
      <PlaceOutlinedIcon sx={{marginBottom:"-4px",marginLeft:"30px"}}></PlaceOutlinedIcon>
       Attractions
       </Link>

       <Link to="/flights" underline='none' style={{color:"white", textDecoration:"none"}} className="fly">
      <FlightOutlinedIcon sx={{marginBottom:"-4px",marginLeft:"30px"}}></FlightOutlinedIcon>
       Flights
      </Link>
      
       
     
      </div>
    </div>
  )
}
export default AttractionsNavbar;