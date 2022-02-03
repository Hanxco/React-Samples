import React, { useState } from 'react';

const Artist = ( {artist} ) => {
    const [bioExpand, setBioExpand] = useState(false);
    const [btnMsg, setBtnMsg] = useState('Ver más');

    if (Object.keys(artist).length === 0) return null;

    var artistPrimary = {};
    var biography = '';
    var biographySplit = '';
    if (artist.data.artists.length === 1) {
        artistPrimary = artist.data.artists[0];
        biography = artistPrimary.strBiographyES;
        if (biography.length > 500) {
            biographySplit = biography.substr(0,500) + ' ...';
        }
    }
    const { strArtistThumb, strStyle, strGenre, strWebsite,
            strFacebook, strTwitter, strLastFMChart, intFormedYear, 
            intMembers, strCountry } = artistPrimary;

    const desplegarBio = e => {
        biographySplit = artistPrimary.strBiographyES;
        setBioExpand(!bioExpand);
        if (bioExpand) {
            setBtnMsg('Ver más');
        } else {
            setBtnMsg('Reducir');
        }
    }

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} className="rounded img-fluid img-thumbail" alt="logo artist"/>
                <p className="card-text"><b>Género:</b> {strGenre}</p>
                <p className="card-text"><b>Año de creación:</b> {intFormedYear}</p>
                <p className="card-text"><b>Miembros de la banda:</b> {intMembers}</p>
                <p className="card-text"><b>Origen:</b> {strCountry}</p>
                <p className="card-text"><b>Web:</b> <a href={strWebsite}>{strWebsite}</a></p>
                
                <p className="card-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
                <h2 className="card-text">Biografía</h2>
                { bioExpand ? biography : biographySplit }
                <input
                    type="button"
                    onClick={desplegarBio}
                    value={btnMsg}
                    className="btn btn-primary" />
            </div>
        </div>
    );
}
 
export default Artist;