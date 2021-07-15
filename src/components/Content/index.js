import React from 'react'
import './styles.css'
import ResumoButtons from '../ResumoButtons'
import AtividadesButtons from '../AtividadesButtons'
import Vector1 from './Vector1.svg'
import Vector2 from './Vector2.svg'
import Vector3 from './Vector3.svg'
import Vector4 from './Vector4.svg'
import Vector5 from './Vector5.svg'

function Content() {
    return (
        <div className="Content">
            <div className="Resumo">
                <h1>Resumo</h1>
                <section className="Colunas">
                    <a href="sla1">
                        <ResumoButtons Numero="02" Texto="Cursos matriculados" VectorIMG={Vector1}/>
                    </a>
                    <a href="sla2">
                        <ResumoButtons Numero="02" Texto="Atividades próximas" VectorIMG={Vector2}/>
                        </a>
                    <a href="sla3">
                        <ResumoButtons Numero="785" Texto="Alunos Online" VectorIMG={Vector3}/>
                    </a>
                </section>
            </div>

            <div className="Atividades">
                <h1>Próximas Atividades</h1>
                <section className="Colunas">
                    <a href="sla4">
                        <AtividadesButtons VectorIMG={Vector4} Texto1="Algoritmos e Programação" Texto2="Enviar arquivo Peter Smokes" Texto3="10/10/20" DivName="AEP"/>
                    </a>
                    <a href="sla5">
                        <AtividadesButtons VectorIMG={Vector5} Texto1="Projeto de Banco de Dados" Texto2="Enviar o esquema MySQL" Texto3="10/10/20" DivName="BancoDeDados"/>
                    </a>
                </section>
            </div>
            
        </div>
    )
}

export default Content