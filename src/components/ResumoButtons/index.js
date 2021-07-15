import React from 'react'
import './styles.css';


function ResumoButtons(props) {
    return (
        <div className="ResumoButtons">
            <div className="Texto">
                <h2>{props.Numero}</h2>
                <p>{props.Texto}</p>
            </div>
            <div className="Circulo">         
                <img src={props.VectorIMG}></img>
            </div>
        </div>
    )
}

export default ResumoButtons