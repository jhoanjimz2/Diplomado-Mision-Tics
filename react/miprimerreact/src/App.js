import './App.css';
import MiComponente from './components/MiComponente';
import Propiedades from "./components/Propiedades";
import Peliculas from './components/Peliculas';
import Router from './Router';


function holaMundo(nombre,edad) {
  var presentacion2 = <div>
    <h1>hola soy {nombre}</h1>
    <h2>Tengo {edad} años</h2>
  </div>;
  return presentacion2;
}


function App() {
  var nombre = "Jhoan Alexander Jimenez Terán";
  var presentacion = <h2 className='bg-warning p-5'>Hola, soy {nombre}</h2>
  var btnTitulo = "Click";
  return (
    <div className="App">
      <header className="App-header">
        <header className="App-header">
          <Router></Router>
          {/* {presentacion}
          {holaMundo(nombre, 25)} */}
        </header>
        <section className="Componentes">
          {/* <Propiedades titulo="Propiedades" btn={btnTitulo}/> 
          <MiComponente/>
          <Peliculas/> */}
        </section>
      </header>
    </div>
  );
}

export default App;
