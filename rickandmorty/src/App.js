import logo from './logo.svg';
import './App.css';
import { Header } from './componentes/Header';
import { Buttons } from './componentes/Buttons';
import { Characters } from './componentes/Characters';
import MaterialComponente from './componentes/MaterialComponente';

function App() {
  return (
    <>
      <Header></Header>
      <Characters></Characters>
      <MaterialComponente></MaterialComponente>
    </>
  );
}

export default App;
