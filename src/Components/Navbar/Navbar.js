import { Component } from 'react'; // Importing Component from React library
import './Navbar.css';// Importing CSS styles for Navbar component
import Logo from '../Images/logo.webp' // Importing logo image
import { HiMiniChevronDown } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";
import { NavLink } from 'react-router-dom'; // Importing NavLink component from react-router-dom

class Navbar extends Component{ // Class component for Navbar
    state = { clicked: false }; // State to manage click status

    handleClick = () => { // Function to handle click event
        this.setState({ clicked: !this.state.clicked }); // Toggling clicked state
    }

    handleNavLinkClick = () => { // Function to handle NavLink click event
        this.setState({ clicked: false }); // Close the menu on link click
    }
    render(){ // Render method
  return(
    <header>{/* Header element */}
        <NavLink to='/Home' id='Logo_link'><img src={Logo} alt='' className='Logo'/></NavLink>{/* Logo with NavLink to Home */}
        <nav id='navbar' className={this.state.clicked?'#navbar active':'#navbar'}>{/* Navigation menu */}
            <li><abbr><NavLink to='/Home' className='navlink' onClick={this.handleNavLinkClick}>Home</NavLink></abbr></li>{/* NavLink to Home */}
            <li><abbr><NavLink to='/About' className='navlink' onClick={this.handleNavLinkClick}>About Us</NavLink></abbr></li>{/* NavLink to About Us */}
            <li><abbr>Project <HiMiniChevronDown/></abbr> {/*Project dropdown*/}
                <ul className="dropdown">{/* Dropdown menu */}
                    <li><abbr>On Going<HiMiniChevronRight/></abbr> {/* On Going submenu */}
                            <ul className='sub-dropdown'>{/* Submenu */}
                                <li><abbr><NavLink to='/Casamelo' className='navlink' onClick={this.handleNavLinkClick}>Casa Melo</NavLink></abbr></li>{/* NavLink to Casa Melo */}
                            </ul>
                    </li>
                </ul>
            </li>
            <li><abbr>Media <HiMiniChevronDown/></abbr>{/* Media dropdown */}
                <ul className="dropdown">{/* Dropdown menu */}
                    <li><abbr><NavLink to='/Gallery' className='navlink' onClick={this.handleNavLinkClick}>Gallery</NavLink></abbr></li>{/* NavLink to Gallery */}
                    <li><abbr><NavLink to='/Blog' className='navlink' onClick={this.handleNavLinkClick}>Blogs</NavLink></abbr></li>{/* NavLink to Blogs */}
                </ul>
            </li>
            <li><abbr><NavLink to='/Contact' className='navlink' onClick={this.handleNavLinkClick}>Contact Us</NavLink></abbr></li>{/* NavLink to Contact Us */}
        </nav>
    <div id='moblie' onClick={this.handleClick}>{/* Mobile menu button */}
        <i id='bar' className={this.state.clicked?'fas fa-times':'fas fa-bars'}></i>{/* Icon for mobile menu */}
    </div>
    </header>/* Closing header element*/
  )
}}
export default Navbar; // Exporting Navbar component as default
