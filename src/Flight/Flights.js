import React, { useState } from 'react'
import './flights.css'
import AttractionsNavbar from '../AttractionsNavbar'
import {FaPlaneArrival, FaPlaneDeparture, FaChild} from "react-icons/fa"
import {GiPerson} from "react-icons/gi"
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import resim from './qr.jpg'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Flights = () => {
const [selectedOption,setSelectedOption] = useState("")
const [error,setError]=useState(false)
const [errorMessage,setErrorMessage]=useState(false)
const [selectedAirport, setSelectedAirport] = useState('');
const [destination, setDestination] = useState('');
const [departure, setDeparture] = useState('');
const [returnn, setReturn] = useState('');
const [price, setPrice] = useState('');
const [ucakBileti, setUcakBileti] = useState(null);
const [open, setOpen] = useState(false);

const handleUcakBiletiOlustur = () => {
  setOpen(true);
  setUcakBileti(`Airport: ${selectedAirport} Selected Date: ${departure}`);
};
const handleClose = () => {
  setOpen(false);
};
const handleAirportChange = (event) => {
  setSelectedAirport(event.target.value);
};
const handleDestination = (event) => {
  setDestination(event.target.value);
};
const handleDeparture = (event) => {
  setDeparture(event.target.value);
};
const handleReturn = (event) => {
  setReturn(event.target.value);
};
const handlePrice = (event) => {
  setPrice(event.target.value);
};
const handleSubmit =(e)=>{
  e.preventDefault();
  if(selectedOption===""){
    setError(true)
  }
  else if (!selectedAirport || !destination || !departure || !returnn || !price) {
    setErrorMessage(true)
    setError(true)
  }  
  else{
    setError(false)
    setErrorMessage(false)
  }
}



  return (
    <div>
      <AttractionsNavbar></AttractionsNavbar>
      <section>
      <form onSubmit={handleSubmit}>
          <div className='fly'>
           <div className='rsm'>
           <div className='head'>
           <p className='header'>Flight Booking</p>
           </div>
            <div style={{justifyContent:"center",marginTop:"20px",paddingBottom:"40px",display:"grid"}}>
              <div>
                <div style={{display:"flex",marginTop:"8px"}}>
                  <div style={{display:"flex",alignItems:"center"}}>
                    <input type='radio'
                    value="option1"
                    checked={selectedOption==="option1"}
                    onChange={e=>setSelectedOption(e.target.value)}
                    ></input>
                   
                     <p style={{fontWeight:"bold",fontSize:"16px",marginLeft:"1px",marginTop:"15px"}}>Round Trip</p>
                     {error?
                   <span style={{color:"red",marginTop:"30px",marginLeft:"-100px"}}>Trip type is required</span>:""}               
                  
                    </div>
               

                <div style={{display:"flex",alignItems:"center",marginLeft:"40px"}}>
                    <input type='radio'
                    value="option2"
                    checked={selectedOption==="option2"}
                    onChange={e=>setSelectedOption(e.target.value)}
                    ></input>
                    <p style={{fontWeight:"bold",marginTop:"15px"}}>One Way</p>
                
                  </div>

                  <div style={{display:"flex",alignItems:"center",marginLeft:"30px"}}>
                    <input type='radio'
                     value="option3"
                     checked={selectedOption==="option3"}
                     onChange={e=>setSelectedOption(e.target.value)}
                     ></input>
                    <p style={{fontWeight:"bold",marginTop:"15px"}}>Multy-city</p>
                  </div>
                  </div>
                <div>
                
                </div>
              </div>
          
                    {/* departure section */}
                
              <div>
                 <div>
                  <div style={{position:"relative"}}>
                    <p style={{fontWeight:"bold",fontSize:"13px",lineHeight:"0px",marginLeft:"10px"}}>FLYING FROM</p>
                    <select 
                    style={{width:"300px",height:"30px",borderRadius:"5px",paddingLeft:"80px"}}
                    value={selectedAirport}
                    onChange={handleAirportChange}
                    >
                
                      <option value='' selected disabled hidden>--Select Airport--</option>
                      <option value='ENIA'>England Newcastle International Airport</option>
                      <option value='INIA'>Italy Naples International Airport</option>
                      <option value='MMA'>Malaysia Mulu Airport</option>
                      <option value='KMA'>Kenya Malindi Airport</option>
                    
                    </select>
                    
                    
                    <FaPlaneDeparture style={{top:"20px",position:"absolute",marginLeft:"-270px",fontSize:"20px",color:"black"}}></FaPlaneDeparture>
                    
                  </div>
                  {errorMessage?
                   <span style={{color:"red",marginTop:"80px"}}>Departure is required</span>:""}               
                 </div>
              </div>

              {/* arrival section */}
              <div>
                 <div>
                  <div style={{position:"relative"}}>
                    <p style={{fontWeight:"bold",fontSize:"13px",lineHeight:"0px",marginLeft:"10px",marginTop:"10px"}}>FLYING TO</p>
                    <select
                    value={destination}
                    onChange={handleDestination} 
                    style={{width:"300px",height:"30px",borderRadius:"5px",paddingLeft:"80px"}}>
                    <option value='' selected disabled hidden>--Select Airport--</option>
                      <option value='ENIA'>England Newcastle International Airport</option>
                      <option value='INIA'>Italy Naples International Airport</option>
                      <option value='MMA'>Malaysia Mulu Airport</option>
                      <option value='KMA'>Kenya Malindi Airport</option>
                    </select>
                    <FaPlaneArrival style={{top:"20px",position:"absolute",marginLeft:"-270px",fontSize:"20px",color:"black"}}></FaPlaneArrival>
                  </div>
                  {errorMessage?
                   <span style={{color:"red",marginTop:"80px"}}>Destination is required</span>:""}               
                 </div>
              </div>
              
              {/* date section */}
              <div style={{display:"flex",marginLeft:"8px"}}>
                    {/* departure section */}
              <div>
                 <div>
                  <div style={{position:"relative"}}>
                    <p style={{fontWeight:"bold",fontSize:"13px",lineHeight:"0px"}}>DEPARTURE DATE</p>
                    <input type='date'
                    value={departure}
                    onChange={handleDeparture} 
                    style={{width:"280px",height:"30px",borderRadius:"5px",fontSize:"16px"}}></input>
                  </div>
                  {errorMessage?
                   <span style={{color:"red",marginTop:"80px"}}>Date is required</span>:""}  
                  </div>
                  </div>
                   
              

                    {/* return section */}
                  <div>
                    <div>
                  <div style={{position:"relative"}}>
                    <p style={{fontWeight:"bold",fontSize:"13px",marginLeft:"20px",marginTop:"12px",lineHeight:"0px"}}>RETURN DATE</p>
                    <input type='date'
                    value={returnn}
                    onChange={handleReturn} 
                    style={{width:"280px",height:"30px",borderRadius:"5px",fontSize:"16px",marginLeft:"10px"}}></input>
                  </div>
                  {errorMessage?
                   <span style={{color:"red",marginTop:"80px",marginLeft:"10px"}}>Date is required</span>:""}  
                 </div>
                 </div>
                 </div>

                    {/* passenger section */}
                <div style={{display:"flex",marginLeft:"8px"}}>
                    {/* adult section */}
                <div>
                 <div>
                  <div style={{position:"relative"}}>
                    <p style={{fontWeight:"bold",fontSize:"13px",lineHeight:"0px"}}>ADULTS (18+)</p>
                    <select style={{width:"300px",height:"30px",borderRadius:"5px",paddingLeft:"80px"}}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <GiPerson style={{top:"18px",position:"absolute",marginLeft:"-270px",fontSize:"20px",color:"black"}}></GiPerson>
                  </div>
                
                 </div>
              </div>
                

                 {/* children section */}
                <div>
                 <div>
                  <div style={{position:"relative"}}>
                    <p style={{fontWeight:"bold",fontSize:"13px",lineHeight:"0px",marginLeft:"20px",marginTop:"13px"}}>CHILDREN (0-17)</p>
                    <select style={{width:"300px",height:"30px",borderRadius:"5px",paddingLeft:"80px",marginLeft:"10px"}}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <FaChild style={{top:"18px",position:"absolute",marginLeft:"-270px",fontSize:"20px",color:"black"}}></FaChild>
                  </div>
 
                 </div>
              </div>
            </div>
            
              {/* class and price section */}
            <div style={{display:"flex",marginLeft:"8px"}}>
              {/* class section */}
              <div>
                 <div>
                  <div>
                    <p style={{fontWeight:"bold",fontSize:"13px",lineHeight:"0px",marginLeft:"5px",marginTop:"34px"}}>CLASS</p>
                    <select style={{width:"300px",height:"30px",borderRadius:"5px",paddingLeft:"80px",marginLeft:"5px",marginTop:"-105px"}}>
                      <option>Economy</option>
                      <option>Business</option>
                    </select>
                   
                  </div>
                 
                 </div>
            </div>

                    {/* price section */}
                    <div>
                 <div>
                  <div>
                    <p style={{fontWeight:"bold",fontSize:"13px",lineHeight:"0px",marginLeft:"20px",marginTop:"34px"}}>PRICE</p>
                    <select
                    value={price}
                    onChange={handlePrice}
                    style={{width:"300px",height:"30px",borderRadius:"5px",paddingLeft:"80px",marginLeft:"10px",marginTop:"-105px"}}>
                      <option>All Prices</option>
                      <option>$ 1000</option>
                      <option>$ 2000</option>
                      <option>$ 3000</option>
                      <option>$ 4000</option>
                      <option>$ 5000</option>
                    </select>
                   
                  </div>
                  {errorMessage?
                   <span style={{color:"red",marginTop:"80px",marginLeft:"10px"}}>Price is required</span>:""}
                 </div>
            </div>
           </div>

        {/* btn section */}
            <div>
              <Button type='submit' onClick={handleUcakBiletiOlustur}
               style={{fontWeight:"bold",fontSize:"13px",lineHeight:"40px",width:"200px",border:"none",cursor:"pointer",backgroundColor:"red",height:"40px",color:"white",marginTop:"20px",marginLeft:"15px"}}>FIND FLIGHT</Button>
            
            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{backgroundColor:" rgb(255, 181, 43)",fontWeight:"bold",height:"12px",marginTop:"-12px"}}>
          Lufthansa
        <p style={{fontWeight:"initial",marginTop:"-28px",marginLeft:"430px",fontSize:"14px",color:"rgb(255, 236, 201)"}}>Boarding pass</p>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <FaPlaneDeparture style={{fontSize:"60px"}}></FaPlaneDeparture>
          <div style={{width:"300px",backgroundColor:"rgb(236, 234, 234)",marginLeft:"100px",marginTop:"-70px"}}>
          {ucakBileti && <p>{ucakBileti}</p>}
          </div>
          </Typography>
          <Typography style={{fontSize:"12px",marginLeft:"100px",fontWeight:"bold",color:"grey"}}>FLIGHT N°</Typography>
          <Typography style={{fontSize:"12px",marginLeft:"200px",marginTop:"-17px",fontWeight:"bold",color:"grey"}}>GATE</Typography>
          <Typography style={{marginLeft:"200px",fontWeight:"bold",marginTop:"-3px"}}>11B</Typography>
          <Typography style={{marginLeft:"270px",marginTop:"-40px",color:"grey",fontWeight:"bold",fontSize:"12px"}}>SEAT</Typography>
          <Typography style={{marginLeft:"270px",fontWeight:"bold",marginTop:"-2px"}}>45A</Typography>
          <Typography style={{fontSize:"15px",marginLeft:"99px",fontWeight:"bold",marginTop:"-25px"}}>X3-65C3</Typography>
       
        </DialogContent>
        <DialogActions style={{backgroundColor:" rgb(255, 181, 43)",height:"20px"}}>
          <img src={resim} style={{height:"37px",width:"60px",marginRight:"450px"}}></img>
          <Button autoFocus onClick={handleClose} style={{color:"white"}}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
            </div>





           </div>





           </div>
           
           </div>
        


         
        </form>
      </section>
    </div>
  )
}

export default Flights