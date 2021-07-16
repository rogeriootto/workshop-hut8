import React from 'react'
import './styles.css'
import Avatar from '../Avatar'
import SidebarLinks from '../SidebarLinks'

function Sidebar() {
    return(
        <div className="Sidebar">
            <Avatar />
            <SidebarLinks name="Dashboard" Style="Bold" />
            <SidebarLinks name="Meus cursos" Style="Normal"/>
        </div>
    )
}

export default Sidebar