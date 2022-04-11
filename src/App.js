import './App.css';
import NavBar from './components/NavBar';
import ItemListCountenier from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailCountainer from './components/ItemDetailContainer/ItemDetailCountainer';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListCountenier title='Indivar Deco'/>
        <ItemCount initial={1} stock={6} onAdd={handleOnAdd}/>
        <ItemDetailCountainer/>
      </header>
    </div>
  );
}

export default App;
