import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ( {guardarCategoria} ) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'sciences', label: 'Sciences' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' }
    ]
    
    // Use hook custom
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    const buscarNoticia = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticia}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categorias</h2>
                    <SelectNoticias />
                    
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.['btn-block']} btn-large amber darken-2`}
                            value="Buscar" />
                        
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;