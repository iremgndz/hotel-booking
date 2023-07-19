import React from 'react'
import './searchItem.css'
import { useNavigate } from 'react-router-dom';


export default function SearchItem() {
    const navigate=useNavigate();
  return (
    <div className='searchItem'>
      <img onClick={()=>navigate('/hotel')} src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/406072876.jpg?k=d17600a18651abfaf3cf6c0d50469da2dab7966df5bf02071fcee3ac6be5759b&o=&hp=1' className='siImg'></img>
      <div className='siDesc'>
        <h1 className='siTitle'>Meriton Suites</h1>
        <span className='siDistance'>180 George Street</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubTitle'>
            Premium Suit with Air conditioning
        </span>
        <span className='siFeatures'>
            Entire studio · 2 bathroom · 30m² 1 full bed
        </span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>
            You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
         <div className='siRating'>
            <span>Very Good</span>
            <button>8.5</button>
         </div>
         <div className='siDetailTexts'>
            <span className='siPrice'>$100</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <a href='https://www.booking.com/hotel/au/meriton-serviced-apartment-kent-street.tr.html'>
            <button className='siCheckButton'>See availability</button>
            </a>
         </div>
      </div>


       
 

  
    </div> 

    
  )
}
