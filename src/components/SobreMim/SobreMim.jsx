import imagemPerfil from '../../assets/pedroreal2.jpg'
import './SobreMim.css'

function SobreMim() {

  return (
    <>
      <section className='container' id='sobremim'>
        <div>
          <img src={imagemPerfil} alt="" className='pedroF'/>
          </div>
          <div>
          <h1 className='texto'>Sobre mim</h1>
          <p className='texto'>Programador Novato com experiência em várias linguagens e sites de programação</p>
          </div>
      </section>
    </>
  )
}

export default SobreMim