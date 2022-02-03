import React from 'react';

// tmb se puede pasar Header(props) y recogerlo como objeto props.titulo
function Header ({titulo}) {
    const edad = 18;

    let mensaje;
    if (edad => 18) {
        mensaje = 'Eres mayor de edad';
    } else {
        mensaje = 'Eres menor de edad';
    }
    return (
        <h1 id="encabezado" className="cssHeader">{mensaje}</h1>
    );

}

export default Header;