import "typeface-roboto";
import "bootswatch/dist/superhero/bootstrap.min.css";
import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListRecipes from "./components/ListRecipes";

import CategoryProvider from "./context/CategoryContext";
import RecipesProvider from "./context/RecipesContext";
import ModalProvider from "./context/ModalContext";

const App = () => {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />

          <div className="container">
            <div className="row">
              <Formulario />
            </div>
            <ListRecipes />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoryProvider>
  );
};

export default App;
