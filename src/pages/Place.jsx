import React from 'react'
import Footer from '../components/Footer'
import PlaceContent from '../components/PlaceContent'
import Shuffle from '../components/Shuffle'
import Wallet from '../components/wallet'

const Place = (props) => {
  return (
    <div>
      <Shuffle />
      <PlaceContent />
      {props.modal &&<Wallet tap={props.ontlick} modal={props.modal}/>}
     <Footer />
    </div>
  )
}

export default Place
