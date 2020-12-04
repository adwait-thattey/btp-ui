import React from 'react'
import './Toolbar.css';

const toolbar = (props) => (

	<header className="header">
        <ul className='items'>
            <li><a href="/marketplace">Marketplace </a></li>
            <li><a href="/devices/owned">My Devices </a></li>
            {/*<li><a href="/devices/shared">Shared Devices </a></li>*/}
            <li><a href="/devices/new">New Device </a></li>
            <li><a href="/devices/1234/data">Sample Device Page </a></li>
            <li><a href="/transactions">Transaction Logs </a></li>

        </ul>   
    </header>

)

export default toolbar