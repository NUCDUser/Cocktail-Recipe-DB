import React from "react";
import { useParams } from "react-router-dom";
import CocktailListBase from "../../components/CocktailListBase";
import { cocktailLookupByAlcoholic } from "../../config";

const Alcoholic = () => {
  const { alcoholicQuery } = useParams();
  return (
    <CocktailListBase
      queryBaseURL={cocktailLookupByAlcoholic}
      query={alcoholicQuery}
    />
  );
};

export default Alcoholic;
