import React from "react";
import { useParams } from "react-router-dom";
import CocktailListBase from "../../components/CocktailListBase";
import { cocktailLookupByGlass } from "../../config";

const Glass = () => {
  const { glassQuery } = useParams();
  return (
    <CocktailListBase queryBaseURL={cocktailLookupByGlass} query={glassQuery} />
  );
};

export default Glass;
