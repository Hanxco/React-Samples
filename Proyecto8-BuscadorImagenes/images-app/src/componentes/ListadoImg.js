import React from 'react';
import Imagen from './Imagen'

const ListadoImg = ( {respSearch} ) => {
    return (
            respSearch.map( img => (
                <Imagen 
                    key={img.Id}
                    img={img}
                />
            )) 
    );
}
 
export default ListadoImg;