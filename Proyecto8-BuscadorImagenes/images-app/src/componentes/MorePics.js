import React from 'react';

const MorePics = ( {totalPages, currentPage, setCurrentPage} ) => {

    const anteriorBtn = e => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    const siguienteBtn = e => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    return (
        <div className="row d-flex justify-content-center mt-4">
            <button type="button"
                    className="bbtn btn-info mr-1"
                    onClick={anteriorBtn}
                    >Anterior</button>
            <button type="button"
                    className="bbtn btn-info mr-1"
                    onClick={siguienteBtn}
                    >Siguiente</button>
        </div>
    );
}
 
export default MorePics;