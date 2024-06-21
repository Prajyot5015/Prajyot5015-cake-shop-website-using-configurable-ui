import './Footer.css'
import PhonePng from './phone-call.png'
import LocationPng from './location-pin.png'
import { theme, siteDetails } from '../../data'

function Footer() {
    return (
        <div className='footer-container' style={{ background: theme.footerBg, color: theme.navbarText }}>
            <div>
                <img src={PhonePng} alt="Phone Logo" className='logo' /> {siteDetails.number}
            </div>
            <div>
                <img src={PhonePng} alt="Phone Logo" className='logo' /> {siteDetails.number}
            </div>
            <div>
                <img src={LocationPng} alt="Location Logo" className='logo' />
                <a href={siteDetails.location} target="blank" style={{ color: theme.navbarText }}> {siteDetails.address} </a>
            </div>
        </div>
    )
}

export default Footer