import React, { Component } from 'react'
import './Header.css';
import logo from '../assets/thrillophilia-logo.png'
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='I_logo'>
                    <img src={logo} className="logo_img" alt="Logo"/>
                </div>
                <div className='searchBar'> 
                    <input type={'text'} placeholder='Search for a tour...' />
                </div>
                <div className='content'>
                    <ul>
                        <li>Tours</li>
                        <li>Adventures</li>
                        <li>Partners</li>
                        <div className='login'>
                            <button >Login</button>
                        </div>
                        <li className='signup'> SignUp</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Header;