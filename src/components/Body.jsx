import CocktailListBase from "./CocktailListBase";
import { cocktailLookupByFirstLetter } from "../config";

const Body = () => {
  return (
    <CocktailListBase queryBaseURL={cocktailLookupByFirstLetter} query="a" />
  );
};

export default Body;
