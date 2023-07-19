import React, { useState } from 'react'
import './list.css'
import {useFetcher, useLocation} from 'react-router-dom'
import {format} from "date-fns" 
import { DateRange } from 'react-date-range';
import SearchItem from '../searchItem/SearchItem';
import SearchItem2 from '../searchItem/SearchItem2';
import SearchItem3 from '../searchItem/SearchItem3';
export default function List() {
    const location = useLocation();
    const [destination,setDestination] = useState(location.state.destination)
    const [date,setDate] = useState(location.state.date)
    const [openDate,setOpenDate] = useState(false)
    const [options,setOptions] = useState(location.state.options)

    
  return (
    <div>
      <div className='listContainer'>
        <div className='listWrapper'>
         <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
                <label>Destination</label>
                <input placeholder={destination} type='text'></input>
            </div>
            <div className='lsItem'>
                <label>Check-in Date</label>
                 <span onClick={()=>setOpenDate(!openDate)}>{format(date[0].startDate,"MM/dd/yyyy")} to {format(date[0].endDate,"MM/dd/yyyy")}</span>
                 {openDate && (
                 <DateRange
                 onChange={item=>setDate([item.selection])}
                 minDate={new Date()}
                 ranges={date}
                 >
                 </DateRange>
                 )}
            </div>
            <div className='lsItem'>
             <label>Options</label>
             <div className='lsOptions'>
             <div className='lsOpenItem'>
                <span className='lsOptionText'>
                    Min price <small>per night</small>
                </span>
            
                <input type='number' className='lsOptionInput'></input>
             </div>

             <div className='lsOpenItem'>
                <span className='lsOptionText'>
                    Max price <small>per night</small>
                </span>
                <input type='number' className='lsOptionInput'></input>
             </div>
             <div className='lsOpenItem'>
                <span className='lsOptionText'>
                    Adult 
                </span>
                <input type='number' min={1} className='lsOptionInput' placeholder={options.adult}></input>
             </div>
             <div className='lsOpenItem'>
                <span className='lsOptionText'>
                    Children
                </span>
                <input type='number' min={0} className='lsOptionInput' placeholder={options.children}></input>
             </div>
             <div className='lsOpenItem'>
                <span className='lsOptionText'>
                    Room
                </span>
                <input type='number' min={1} className='lsOptionInput' placeholder={options.room}></input>
             </div>
             </div>
            </div>
            <button>Search</button>
         </div>
         <div className='listResult'>
          
            <SearchItem></SearchItem>
            <SearchItem2></SearchItem2>
            <SearchItem3></SearchItem3>
           
            
         </div>
        </div>
      </div>
    </div>
  )
}
