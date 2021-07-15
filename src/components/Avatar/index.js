import React from 'react'
import './styles.css'
import avatarimg from './avatar.png';

const Avatar = () => {
    return(
        <div className="Avatar">
            <img src={avatarimg} />
            <h3 className="Nome">Fausto Silva</h3>
            <p className="Curso">Ciência da Computação</p>
        </div>
    )
}

export default Avatar