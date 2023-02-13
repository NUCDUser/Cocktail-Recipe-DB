import React from "react";
import { useParams } from "react-router-dom";
import CocktailListBase from "../../components/CocktailListBase";
import { cocktailLookupByIngredient } from "../../config";

const Ingredient = () => {
  const { ingredientQuery } = useParams();
  return (
    <CocktailListBase
      queryBaseURL={cocktailLookupByIngredient}
      query={ingredientQuery}
    />
  );
};

export default Ingredient;
