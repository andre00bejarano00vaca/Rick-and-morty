import logo from './logo.svg';
import './App.css';
import './componentes/Headers.css';
import './componentes/Characters.css'
import { Characters } from './componentes/Characters';
import Headers from './componentes/Headers';
import { Selector } from './componentes/Selector';

function App() {
  return (
    <>
    <Headers></Headers>
    <main>
    <Selector></Selector>
    </main>
    </>
  );
}

export default App;
