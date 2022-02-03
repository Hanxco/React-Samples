import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalConsumer } from '../context/ModalContext';
import './Receta.css';

function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
    },
    header: {
        padding: '12px 0',
        borderBottom: '1px solid darkgrey'
    },
    content: {
        padding: "12px 0",
        overflow: 'scroll'
    }
}));


const Receta = ( {receta} ) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    // extrer los valores del context
    const { recetaSel, guardarIdReceta, lstIngredientes } = useContext(ModalContext);

    return (
        <div className="col-lg-3 mt-2">
            <div className="card">
                <div className="card-header">
                    <h5 class="card-title">{receta.strDrink}</h5>
                </div>
                <div className="card-body">
                    <img className="img-thumbnail"
                        src={receta.strDrinkThumb} 
                        alt={`Imagen de ${receta.strDrink}`} />
                    <input
                        type="button"
                        className="btn btn-block btn-primary mt-3"
                        onClick={ () => {
                            guardarIdReceta(receta.idDrink)
                            handleOpen(true);
                        }}
                        value="Ver receta" />
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={open}
                            onClose={ () => {
                                guardarIdReceta(null);
                                handleClose();
                            }}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                    <h2 id="simple-modal-title">{recetaSel.strDrink}</h2>
                                    <h6><b>Category: </b>{recetaSel.strCategory}</h6>
                                    <h6><b>Glass type: </b>{recetaSel.strGlass}</h6>
                                    <img className="img-thumbnail" src={recetaSel.strDrinkThumb} alt="" />
                                    <h3 className="mt-4">Description</h3>
                                    <p id="simple-modal-description">
                                        {recetaSel.strInstructions}
                                    </p>
                                    <h3>Ingredients</h3>
                                    <ul className="">
                                    { lstIngredientes }
                                    </ul>
                                </div>
                        </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Receta;