import React, { useState } from 'react'
import './Toolbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons'

function Toolbar(props){

    return (	
        <header className="header">
          <ul className='items'>
                <li><a href="/marketplace">Marketplace </a></li>
                <li><a href="/devices/owned">My Devices </a></li>
                <li><a href="/devices/shared">Shared Devices </a></li>
                <li><a href="/transactions">Transaction Logs </a></li>
                <li><a href="/logout">Logout </a></li>
           </ul>           
            <ul className="icons">
                <NavIcon icon={<FontAwesomeIcon icon={faUsers} size="lg" />} >
                    <DropdownMenu />
                </NavIcon>
            </ul>
        </header>
    )
}

function NavIcon(props){

    const [open, setOpen] = useState(false)
    
    return (
        <li className='nav-icon'>
            <a href='#' className='icon-button' onClick = {()=> setOpen(!open)} >
                {props.icon}
            </a>
            {open && props.children}
       </li>     
    );
}

function DropdownMenu() {
    return (
      <div className="dropdown">
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faUsers} size="lg" />}>Org1</DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faUsers} size="lg" />}>Org2</DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faUsers} size="lg" />}>org3</DropdownItem>
      </div>
    )
}

function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }
  

export default Toolbar