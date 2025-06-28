import './MeusProjetos.css'

import MeuProjeto from '../MeuProjeto/MeuProjeto.jsx'

function MeusProjetos() {

  return (
    <>

    <h2 className='cyn'>Meus projetos</h2>
    <section className="big-seccao" id='meusprojetos'>
        <div className="little-seccao">
            <MeuProjeto nome="Jogo da cobrinha" descricao="Jogo feito para testar reação e raciocinio dos players." site="https://github.com/PedroHolanda-S/calculadora"/>
            
        </div>

        <div className="little-seccao">
            <MeuProjeto nome="Calculadora"  descricao="Um app feito para realizar calculos em meros segundos" site="https://github.com/PedroHolanda-S/calculadora-python"/>

            </div>

      </section>
    </>
  )
}

export default MeusProjetos

        /*<div className="little-seccao">
            <MeuProjeto nome="Medidor de peso medio" descricao="Um programa feito para fazer o calculo da massa media de um adulto de forma simples" site=""/>
        </div>*/
