import { cocktailLookupByFirstLetter } from "../config";
import { lazy, Suspense } from "react";
import Shimmer from "./Shimmer";

const CocktailListBase = lazy(() => import("./CocktailListBase"));

const Body = () => {
  return (
    <Suspense fallback={<Shimmer />}>
      <CocktailListBase queryBaseURL={cocktailLookupByFirstLetter} query="a" />
    </Suspense>
  );
};

export default Body;
