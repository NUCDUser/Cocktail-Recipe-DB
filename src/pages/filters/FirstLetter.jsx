import React from "react";
import { useParams } from "react-router-dom";
import CocktailListBase from "../../components/CocktailListBase";
import { cocktailLookupByFirstLetter } from "../../config";

const FirstLetter = () => {
  const { firstLetterQuery } = useParams();
  return (
    <CocktailListBase
      queryBaseURL={cocktailLookupByFirstLetter}
      query={firstLetterQuery}
    />
  );
};

export default FirstLetter;
