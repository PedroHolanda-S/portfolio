import imagemPerfil from '../../assets/pedroreal.jpg'
import './ApresentacaoRedes.css'

function ApresentacaoRedes() {

  return (
    <>
      <section className='container' id='apresentacaoredes'>
        <div>
          <h1 className='texto'>Pedro</h1>
          <p className='texto'>Programador Frontend</p>
        </div>
        <div>
          <img src={imagemPerfil} alt="" className='pedroimagem'/>
          </div>
      </section>
    </>
  )
}

export default ApresentacaoRedes
