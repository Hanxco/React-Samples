import React, {Fragment} from 'react';

const Lyrics = ( {lyrics, cancion} ) => {

    if (Object.keys(lyrics).length === 0) return null;

    return (
        <Fragment>
            <h1>Letra canción: {cancion}</h1>
            <p className="letra">
                {lyrics.data.lyrics}
            </p>
        </Fragment>
    );
}
 
export default Lyrics;