import React from 'react';
import ShermLogo from '../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png';
import MenuIcon from '@material-ui/icons/Menu'; 
import './style.css';


export default function NavBar() {
    return (
        <div className="bg-light p-3 mb-5 d-flex fit-content">
        {/* Todo : change the logo */}
        <img src={ShermLogo} height="50vh" width="50vw"/>
        <span className='p-3'>Apply</span>
        <span className='p-3'>Menu <a><MenuIcon/> </a></span>        
    </div>
    );
}