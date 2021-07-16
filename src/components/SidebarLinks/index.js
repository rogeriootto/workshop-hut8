import React from 'react'
import './styles.css'

function SidebarLinks (props) {
    return (
        <div className="SidebarLinks">
            <a href="http://google.com.br/"><h2 className={props.Style}>{props.name}</h2></a>
        </div>
    )
}

export default SidebarLinks