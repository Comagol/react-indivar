import './App.css';
import NavBar from './components/NavBar';
import ItemListCountenier from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <p style= {{color: 'purple', backgroundColor: 'blue'}}>
          Indivar Deco
        </p>
        <ItemListCountenier title='Indivar Deco'/>
      </header>
    </div>
  );
}

export default App;
