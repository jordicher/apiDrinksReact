import React, { Fragment, useContext } from 'react'
import { RecipesContext } from "../context/RecipesContext"
import Recipe from './Recipe'

const ListRecipes = () => {

    const { recipe } = useContext(RecipesContext);
    
    return (
     <Fragment>
            <div className="row">
                <div className="col-12 my-4">
                    <h1 className="text-center">List</h1>
                </div>            
            </div>
            <div className="row">
                {recipe.map(rec => {
                   return <Recipe 
                    key={rec.idDrink}
                    rec={rec}/>
                })}

            </div>
     </Fragment>
    )
}

export default ListRecipes
