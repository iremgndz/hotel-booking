import React from 'react'
import AttractionsNavbar from '../AttractionsNavbar'
import './attractions.css'
import SelectBox from '../SelectBox/SelectBox'

export default function Attractions() {
  return (
    <div className='navbar_'>
      <AttractionsNavbar></AttractionsNavbar>
      <div className='title'>
       <h1>What would you like to see?</h1>
       <span className='titlespan'>Discover new attractions and experiences that match your interests and travel style</span>
       </div>
      <div className='select'>
      <SelectBox></SelectBox>
      </div>
      
      
      
       



    </div>
  )
}
