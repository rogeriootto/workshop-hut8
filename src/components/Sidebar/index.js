import React from 'react'
import './styles.css'
import Avatar from '../Avatar'
import SidebarLinks from '../SidebarLinks'

function Sidebar() {
    return(
        <div className="Sidebar">
            <Avatar />
            <SidebarLinks name="Dashboard" />
            <SidebarLinks name="Meus cursos" />
        </div>
    )
}

export default Sidebar