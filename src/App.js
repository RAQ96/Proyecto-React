import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PaginaNoEncontrada from './componentes/paginaNoEncontrada/PaginaNoEncontrada';
import Novedades from './componentes/novedades/Novedades';
import Nosotros from './componentes/nosotros/Nosotros';
import MenuSuperior from './componentes/menuSuperior/MenuSuperior';
import MasVendidos from './componentes/masVendidos/MasVendidos';
import Inicio from './componentes/inicio/Inicio';
import Encabezado from './componentes/encabezado/Encabezado';
import Contactenos from './componentes/contactenos/Contactenos';

function App() {
  const opciones = [
    { nombre: 'Inicio', enlace: '/' },
    { nombre: 'Novedades', enlace: '/novedades' },
    { nombre: 'Más vendidos', enlace: '/masVendidos' },
    { nombre: 'Sobre nosotros', enlace: '/nosotros' }
  ];

  return (
    <Router>
      <div>
        <Encabezado />
        <MenuSuperior opciones={opciones} />
        <Contactenos />

        <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/masVendidos" element={<MasVendidos />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route exact path="/" element={<Inicio />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
