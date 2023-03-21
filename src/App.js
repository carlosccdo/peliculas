import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import PeliculasJson from './peliculasJson.json';

function App() {
	
	let peliculas = PeliculasJson;
  return (
    <PageWrapper>
		{peliculas.map(pelicula => 
				<Pelicula
					titulo={pelicula.titulo}
					calificacion={pelicula.calificacion}
					director={pelicula.director}
					actores={pelicula.actores}
					fecha={pelicula.fecha}
					duracion={pelicula.duracion}
					img={pelicula.img}
					descripcion={pelicula.descripcion}
				>
					
				</Pelicula>
		)}
    </PageWrapper>
  );
}

export default App;
