import React from 'react'
import './styles.css'

function AtividadesButtons(props) {
    return (
        <div className="AtividadesButtons">
            <div className={props.DivName}>
                <img src={props.VectorIMG}></img>
            </div>
            <div className="Textos">
                <h2>{props.Texto1}</h2>
                <h1>{props.Texto2}</h1>
                <p>{props.Texto3}</p>
            </div>
        </div>
    )
}

export default AtividadesButtons