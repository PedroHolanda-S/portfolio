//import imagemPerfil from '../../assets/pedro.jpg'
import './Habilidades.css'

import Habilidade from "../Habilidade/Habilidade"

function Habilidades() {

  return (
    <>
      <section className="outra-seccao" id='habilidades'>
        <Habilidade nome="HTML"/>
        <Habilidade nome="CSS"/>
        <Habilidade nome="PYTHON"/>
        <Habilidade nome="JAVASCRIPT"/>
        <Habilidade nome="C++"/>
        <Habilidade nome="UNITY"/>
        <Habilidade nome="TINKERCAD"/>
        <Habilidade nome="MAGIC VOXEL"/>
      </section>
    </>
  )
}

export default Habilidades
