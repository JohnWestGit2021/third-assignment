import React from 'react'

export default function SideMenu({ sideMenu, setSideMenu }) {
    return (
        <div id="mySidenav" style={{ width: sideMenu ? '250px' : '0px' }}  className="sidenav">
            <div onClick={() => { setSideMenu(!sideMenu) }} className="closebtn">&times;</div>

            <div className="avatar">
            </div>

            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    )
}
