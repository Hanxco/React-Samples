import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect( () => {
    const consultarAPI = async () => {
      const apiKey = '';
      const url = `https://newsapi.org/v2/top-headlines?country=au&category=${categoria}&apiKey=${apiKey}`;
      const response = await fetch(url);
      const noticias = await response.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria] );

  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias" />
      <Formulario 
        guardarCategoria={guardarCategoria}
      />
      <ListadoNoticias 
        noticias={noticias}
      />
    </Fragment>
  );
}

export default App;
