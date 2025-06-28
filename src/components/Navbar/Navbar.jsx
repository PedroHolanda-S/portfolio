import './Navbar.css'

function Navbar() {

  return (
    <>
    <div className='navbar'>
      <h2 className='tomate'>Pedro Henrique</h2>
      <ul className='nav-links'>
        <li><a href="#apresentacaoredes" >Home</a></li>
        <li><a href='#sobremim'>Sobre mim</a></li>
        <li><a href='#habilidades'>Habilidades</a></li>
        <li><a href='#meusprojetos'>Projetos</a></li>
      </ul>
    </div>
    </>
  )
}

export default Navbar
