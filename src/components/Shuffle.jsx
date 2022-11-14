import React from 'react'
import './shuffle.scss'
import settilngs from '../Assets/images/setting-5.png'

const Shuffle = () => {
  return (
    <div className='shuffle'>
      <p>Resturant</p>
      <p>Cottage</p>
      <p>Castle</p>
      <p>fantast city</p>
      <p>beach</p>
      <p>Carbins</p>
      <p>Off-grid</p>
      <p>Farm</p>
      <p className='flex-p'><span>Location</span><img src={settilngs} alt="" /></p>
    </div>
  )
}

export default Shuffle
