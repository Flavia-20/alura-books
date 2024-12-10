import './App.css';
import Logo from './componentes/Logo'
import OpcoesHeader from './componentes/OpcoesHeader';
import IconesHeader from './componentes/IconesHeader';

//lista que guarda os textos

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo/>
                <OpcoesHeader/>
                <IconesHeader/>
            </header>
        </div>
  );
}
export default App