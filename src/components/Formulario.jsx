import React, { useContext, useState } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { RecipesContext } from '../context/RecipesContext'


const Formulario = () => {

    const { category } = useContext(CategoryContext);
    const { setSaveSearch, setConsult } = useContext(RecipesContext);


    const [search, setSearch] = useState({
        nameIngredient: '',
        category: ''
    })

    const optionSearch = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (

        <form action="" className="col-12" onSubmit={e => {
            e.preventDefault()
            setSaveSearch(search)
            setConsult(true)
        }}>
            <fieldset className="text-center">
                <legend>Search drinks by category or ingredient</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input
                        onChange={optionSearch}
                        type="text"
                        name="nameIngredient" className="form-control"
                        placeholder="search ingredient" />
                </div>
                <div className="col-md-4">
                    <select
                        onChange={optionSearch}
                        className="form-control"
                        name="category">
                        <option value="">Select option</option>
                        {category.map(cat => (
                            <option key={cat.strCategory} value={cat.strCategory}>{cat.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input type="submit" value="Send" className="btn btn-block btn-primary" />
                </div>
            </div>
        </form>

    )
}

export default Formulario
