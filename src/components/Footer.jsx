import React from 'react'
import '../Assets/css/footer.scss'
import footerimage from '../Assets/images/Group.svg'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter,AiOutlineInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <aside className='icons'>
            <div className="footer__logo">
                <img src={footerimage} alt="" />
            </div>
            <div className="footer__icons">
                <p><GrFacebookOption className='fbicon'/> <AiOutlineTwitter className='fbicon'/> <AiOutlineInstagram className='fbicon'/></p>
                <p>&#169;2022 Metabnb</p>
            </div>
        </aside>
        <aside>
            <li><b>Community</b></li>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
        </aside>
        <aside>
            <li><b>Places</b></li>
            <li>Castle</li>
            <li>Farms </li>
            <li>Beach</li>
            <li>Learn more</li>
        </aside>
        <aside>
        <li><b>About us</b></li>
            <li>Road map</li>
            <li>Creators  </li>
            <li>Career</li>
            <li>Contact us</li>
        </aside>
    </footer>
  )
}

export default Footer