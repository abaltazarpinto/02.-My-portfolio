import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () =>
{
    const[showNav, setShowNav] = useState(false);

return (
    <div className= 'nav-bar'>
        <Link className='logo' to='/' >
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="s lobodan" />
        </Link>
        <nav> 
            <NavLink 
                exat="true" 
                activeclassname="active" 
                to= "/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exat="true" 
                activeclassname="active" 
                className="about-link" 
                to= "/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exat="true" 
                activeclassname="active" 
                className="contact-link" 
                to= "/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/andr%C3%A9-baltazar-pinto-13a056141/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/andrepinto77">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.skype.com/en/">
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburguer-icon' />
        </div>
    )
}

export default Sidebar