import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50;
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
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        color: "black"
    },
}));

const Recipe = ({ rec }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const clases = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const { recipe, setIdRecipe, setRecipe } = useContext(ModalContext);

    const showIngredients = (recipe) => {

        let ingredients = [];

        for (let i = 1; i < 16; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}</li>
                )
            }

        }

        return ingredients;
    }
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{rec.strDrink}</h2>
                <img src={rec.strDrinkThumb} alt={rec.strDrink} className="card-img-top" />

                <div className="card-body">
                    <button type="button" className="btn btn-primary btn-block" onClick={() => {
                        setIdRecipe(rec.idDrink);
                        setRecipe({});
                        handleOpen();
                    }}>
                        See recipe
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose();
                            setIdRecipe(null);
                        }}
                    >
                        <div style={modalStyle} className={clases.paper}>
                            <h2>{recipe.strDrink}</h2>
                            <h3 className="mt-4"> Instructions </h3>
                            <p>{recipe.strInstructions}</p>
                            <img src={recipe.strDrinkThumb} alt="" className="img-fluid my-4" />
                            <h3>Ingredients</h3>
                            <ul>
                                {showIngredients(recipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe
