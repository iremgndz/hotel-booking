import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AttractionsNavbar from '../AttractionsNavbar'
import './hotel.css' 
import MailList from '../mailList/MailList'

export default function Hotel() {
    const [slideNumber,setSlideNumber] = useState(0);
    const [open,setOpen] = useState(false);
    const photos = [
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/433430047.jpg?k=819b435449ccb50726db0b66cef01079421e0c2b1967c62c22c15a37882c4dab&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/436431946.jpg?k=53b336cffa3ab81f05eea2304025c025e4e891ba3fc1c8c7a94cd0799fb8b020&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/436432610.jpg?k=142cdd24b4b603818d8057e046352dfe0c42bc42163ce2051ee227831bba2db8&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/433432288.jpg?k=18c399e68cc51f8327b959a2b82a9fd8dbc7b366fb8b5b7daf71f23e11a99c08&o=&hp=1"
        },
        {
          src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/426891800.jpg?k=9877f2c144154bd4c586a62fd5af75e976751e1b7f6fc2f76810fa4385ae360f&o=&hp=1"
      },
      {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/433426666.jpg?k=9e07dad093a2997961f46e8f0a18fb97252948eca3e21c3ae02346bb5fa480e5&o=&hp=1"
    }
    ]

    const handleOpen = (i) => {
      setSlideNumber(i);
      setOpen(true);
    } 

    const handleMove = (direction) => {
      let newSlideNumber;

      if (direction==='l'){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
      }
      else{
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
      }
      setSlideNumber(newSlideNumber)

    }

  return (

    <div>
      <AttractionsNavbar></AttractionsNavbar>
      <div className='hotelContainer'>
        {open && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}></FontAwesomeIcon>
          <div className='sliderWrapper'>
             <img src={photos[slideNumber].src} className='sliderImg'></img>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}></FontAwesomeIcon>
        </div>}
        <div className='hotelWrapper'>
            <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Trendy Apartments in Palermo</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span>700 metres from Plaza Serrano Square</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 4.8 km from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo,i)=>(
                <div className='hotelImgWrapper'>
                  <img onClick={()=>handleOpen(i)} src={photo.src} className='hotelImg'></img>
                </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>Stay in the heart of Buenos Aires</h1>
                <p className='hotelDesc'>
                Located 700 m from Plaza Serrano Square, Trendy Apartments in Palermo offers a garden, and air-conditioned accommodation with a balcony and free WiFi.

                The apartment provides guests with a terrace, a seating area, cable flat-screen TV, a fully equipped kitchen with a fridge and an oven, and a private bathroom with bidet and free toiletries. A microwave, a stovetop and toaster are also featured, as well as a coffee machine and a kettle.

                A bicycle rental service is available at Trendy Apartments in Palermo.

                Buenos Aires Japanese Gardens is 3.1 km from the accommodation, while Museum of Latin American Art of Buenos Aires MALBA is 4.1 km away. The nearest airport is Jorge Newbery Airfield, 6 km from Trendy Apartments in Palermo, and the property offers a paid airport shuttle service.
                </p>
            </div>
            <div className='hotelDetailsPrice'>
                <h1>Perfect for a 7-night stay</h1>
                <span>
                This is our guests' favourite part of Buenos Aires, according to independent reviews.
                </span>
                <h2>
                    <b>$845</b>(7 nights)
                </h2>
                <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList></MailList>
      </div>
    </div> 
  )
}
