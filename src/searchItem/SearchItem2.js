import React from 'react'
import './searchItem.css'
import { useNavigate } from 'react-router-dom';


export default function SearchItem() {
    const navigate=useNavigate();
  return (
    <div className='searchItem'>
      <img onClick={()=>navigate('/hotel')} src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/94327683.jpg?k=eab92236e47a76979015802ba99f7b94b861a3e7f2bbdd19180fcddd1957dbee&o=&hp=1' className='siImg'></img>
      <div className='siDesc'>
        <h1 className='siTitle'>Claridge Hotel</h1>
        <span className='siDistance'>400m from 9 de Julio Avenue</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubTitle'>
            Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>
            Entire studio · 1 bathroom · 30m² 1 full bed
        </span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>
            You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
         <div className='siRating'>
            <span>Good</span>
            <button>7.5</button>
         </div>
         <div className='siDetailTexts'>
            <span className='siPrice'>$123</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <a href='https://www.booking.com/hotel/fr/claridge.tr.html'>
            <button className='siCheckButton'>See availability</button>
            </a>
         </div>
      </div>


       
 

  
    </div> 

    
  )
}
