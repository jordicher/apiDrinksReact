import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipe, setRecipe] = useState([]); //el resultat
    const [saveSearch, setSaveSearch] = useState({
        nameIngredient: '',
        category: ''
    });

    const [consult, setConsult] = useState(false)

    useEffect(() => {
        if (consult) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${saveSearch.nameIngredient}&c=${saveSearch.category}`;
                
                const result = await axios.get(url);
                setRecipe(result.data.drinks);
            
            }

            getRecipes();
        }


    }, [saveSearch])


    return (
        <RecipesContext.Provider
            value={{
                recipe,
                setSaveSearch,
                setConsult
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;