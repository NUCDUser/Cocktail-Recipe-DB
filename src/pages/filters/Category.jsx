import React from "react";
import { useParams } from "react-router-dom";
import CocktailListBase from "../../components/CocktailListBase";
import { cocktailLookupByCategory } from "../../config";

const Category = () => {
  const { categoryQuery } = useParams();
  return (
    <CocktailListBase
      queryBaseURL={cocktailLookupByCategory}
      query={categoryQuery}
    />
  );
};

export default Category;
