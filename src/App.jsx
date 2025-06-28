import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import ApresentacaoRedes from './components/ApresentacaoRedes/ApresentacaoRedes.jsx';
import SobreMim from './components/SobreMim/SobreMim.jsx';
import Habilidades from './components/Habilidades/Habilidades.jsx';
import MeusProjetos from './components/MeusProjetos/MeusProjetos.jsx';

function App() {

  return (
    <>
    <div>
      <Navbar />
      <ApresentacaoRedes />
      <SobreMim />
      <Habilidades />
      <MeusProjetos />
<footer>
  <h3>Todos os direitos reservados por Pedro Henrique</h3>
  <h3><a href="https://github.com/PedroHolanda-S" target="_blank" className="github-link">Github: PedroHolanda-S</a></h3>
</footer>
    </div>
    </>
  )
}

export default App
