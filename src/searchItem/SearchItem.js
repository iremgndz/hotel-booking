import React from 'react'
import './searchItem.css'
import { useNavigate } from 'react-router-dom';

export default function SearchItem() {
  const navigate=useNavigate();
  return (
    <div className='searchItem'>
      <img onClick={()=>navigate('/hotel')} src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/433426231.jpg?k=e834b54c37c2faa329bfbc633113e5ae481805c5016e095647366cf97423bf6b&o=&hp=1' className='siImg'></img>
      <div className='siDesc'>
        <h1 className='siTitle'>Trendy Apartments in Palermo</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubTitle'>
            Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>
            Entire studio · 1 bathroom · 21m² 1 full bed
        </span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>
            You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
         <div className='siRating'>
            <span>Exceptional</span>
            <button>10</button>
         </div>
         <div className='siDetailTexts'>
            <span className='siPrice'>$105</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <a href='https://www.booking.com/hotel/ar/trendy-luxury-in-buenos-aires.tr.html?aid=356980&label=gog235jc-1DCAsoDEIddHJlbmR5LWx1eHVyeS1pbi1idWVub3MtYWlyZXNIM1gDaOQBiAEBmAEouAEXyAEM2AED6AEBiAIBqAIDuAKq77CiBsACAdICJGY2YmVjODljLWMwNzgtNGFkYi1hMmYwLTQ0NDI5YzBmN2YyNtgCBOACAQ&sid=c3e25ad47320d3db4cd1f25c22958388&dist=0&keep_landing=1&sb_price_type=total&type=total&'>
            <button className='siCheckButton'>See availability</button>
            </a>
         </div>
      </div>


       
 

  
    </div> 

    
  )
}
