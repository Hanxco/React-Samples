import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form.js';
import Lyrics from './components/Lyrics.js';
import Artist from './components/Artist.js';
import Spinner from './components/Spinner.js';
import axios from 'axios';

function App() {

  const [ searchLyric, saveSearchLyric ] = useState({});
  const [ lyrics, saveLyrics ] = useState({});
  const [ artist, saveArtist ] = useState({});
  
  const [ spinner, setSpinner ] = useState(false);
  
  const { artista, cancion } = searchLyric; 

  const [ errorService, setErrorService ] = useState(false); 

  useEffect(() => {
    if (Object.keys(searchLyric).length === 0) return;
    const consultarApiLetra = async () => {
      saveLyrics({});
      saveArtist({});
      setErrorService(false);
      setSpinner(true);
      const url1 = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      let lstUrl = [url1, url2];
      getAllData(lstUrl).then(
      resp => {
        resp.forEach((element, index) => {
          console.log('element');
          console.log(element);
          if (index == 0) {
            if (element.success) {
              saveLyrics(element); 
            } else {
              setErrorService(true);
            }
          } else if (index == 1) {
            if (element.data.artists == null) {
              setErrorService(true);
            } else {
              saveArtist(element);
            }
          }
        });
        setSpinner(false);
      }).catch( e => {
        setErrorService(true);
      })
    }
    function getAllData(URLs){
      return Promise.all(URLs.map(fetchDataGet));
    }
    function fetchDataGet(URL) {
      return axios
        .get(URL, {timeout: 10000})
        .then(function(response) {
          return {
            success: true,
            data: response.data
          };
        })
        .catch(function(error) {
          return { success: false };
        });
    }
    consultarApiLetra();
  }, [searchLyric])

  return (
    <Fragment>
      <Form
        saveSearchLyric={saveSearchLyric}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            { spinner ? <Spinner /> : null }
            <Artist 
              artist={artist}
              />
          </div>
          <div className="col-md-6">
            { spinner ? <Spinner /> : null }
            { errorService ? <h1>Error servicio, vuelva a intentar más tarde</h1> : null }
            <Lyrics
              cancion={cancion}
              lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
