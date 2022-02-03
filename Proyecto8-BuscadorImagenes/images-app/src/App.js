import React, { useState, useEffect } from 'react';
import Form from './componentes/Form'
import ListadoImg from './componentes/ListadoImg'
import MorePics from './componentes/MorePics'
import styled from '@emotion/styled';

const Listado = styled.div`
    margin-top: 2rem;
`;

function App() {

  const [search, setSearch] = useState('');
  const [respSearch, setRespSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect( () => {
    const consultarAPI = async () => {

      if (search === '') return;
      const imgByPages = 20;
      const apiKey = '';
      //const lang = 'es';
      const query = search.split(' ');
      var queryStr = '';
      query.map( (currElement, index) => {
        queryStr = index === 0 ? currElement : queryStr + '+' + currElement;
      });
      
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${queryStr}&per_page=${imgByPages}&page=${currentPage}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
      setRespSearch(resultado.hits);
      setTotalPages(Math.ceil(resultado.totalHits/imgByPages));

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth'});
    }
    consultarAPI();
  }, [search, currentPage]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de imagenes
        </p>
        <Form 
          setSearch={setSearch}
        />
        <Listado>
          <div class="row">
            <ListadoImg 
              respSearch={respSearch}
            /> 
          </div>
        </Listado>
        { (respSearch.length !== 0) ? 
          <MorePics 
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> : null }
      </div>
    </div>
  );
}

export default App;
