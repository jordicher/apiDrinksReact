import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CategoryContext = createContext();

//provider d'on surten les dades i les funcions, on estan les funcions i state

const CategoryProvider = (props) => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const categories = await axios.get(url)
            setCategory(...category, categories.data.drinks)
            
        }

        getCategory();
    }, [])

    return (
        <CategoryContext.Provider
            value={{
                category
            }}>

            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;