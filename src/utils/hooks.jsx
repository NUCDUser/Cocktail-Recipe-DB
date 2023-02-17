import { useState, useEffect } from "react";
import { cocktailLookupById } from "../config";
import { Link } from "react-router-dom";
import {
  cocktailListByCategoriesSource,
  cocktailListByGlassesSource,
  cocktailListByIngredientsSource,
  cocktailListByAlcoholicSource,
} from "../config";

export const useCocktail = (cocktailID) => {
  const [cocktailDetail, setCocktailDetail] = useState(null);

  useEffect(() => {
    if (!cocktailID) return;
    getDetailData(cocktailID);
  }, []);

  async function getDetailData(cocktailID) {
    const response = await fetch(cocktailLookupById + String(cocktailID));
    const data = await response.json();
    setCocktailDetail(data.drinks?.[0]);
  }
  return cocktailDetail;
};

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    window.ononline = () => {
      setIsOnline(true);
    };
    window.onoffline = () => {
      setIsOnline(false);
    };
    return () => {
      window.ononline = null;
      window.onoffline = null;
    };
  }, []);
  return isOnline;
};

export const useSearchLists = () => {
  const [categories, setCategories] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [alphabet, setAlphabet] = useState([]);

  useEffect(() => {
    getCategoriesList();
    getGlassesList();
    getAlcoholicList();
    getIngredientsList();
    getAlphabet();
  }, []);

  async function getCategoriesList() {
    const response = await fetch(cocktailListByCategoriesSource);
    const categoryList = await response.json();
    setCategories(categoryList.drinks);
  }

  async function getGlassesList() {
    const response = await fetch(cocktailListByGlassesSource);
    const glassesList = await response.json();
    setGlasses(glassesList.drinks);
  }

  async function getAlcoholicList() {
    const response = await fetch(cocktailListByAlcoholicSource);
    const alcoholicList = await response.json();
    setAlcoholic(alcoholicList.drinks);
  }

  async function getIngredientsList() {
    const response = await fetch(cocktailListByIngredientsSource);
    const ingredientList = await response.json();
    setIngredients(ingredientList.drinks);
  }

  function getAlphabet() {
    const charCodes = [...Array(26).keys()].map((v) => v + 65);
    const alphabetList = charCodes.map((c) => String.fromCharCode(c));
    setAlphabet(alphabetList);
  }

  const categoriesUL = () => {
    return (
      <ul>
        {categories.map((category) => (
          <Link to={"/category/" + category?.strCategory}>
            <li key={category?.strCategory}>{category?.strCategory}</li>
          </Link>
        ))}
      </ul>
    );
  };

  const glassesUL = () => {
    return (
      <ul>
        {glasses.map((glass) => (
          <Link to={"/glass/" + glass.strGlass}>
            <li key={glass?.strGlass}>{glass?.strGlass}</li>
          </Link>
        ))}
      </ul>
    );
  };

  const alcoholicUL = () => {
    return (
      <ul>
        {alcoholic.map((alcoholic) => (
          <Link to={"/alcoholic/" + alcoholic?.strAlcoholic}>
            <li key={alcoholic?.strAlcoholic}>{alcoholic?.strAlcoholic}</li>
          </Link>
        ))}
      </ul>
    );
  };

  const ingredientsUL = () => {
    return (
      <ul>
        {ingredients.map((ingredient) => (
          <Link to={"/ingredient/" + ingredient?.strIngredient1}>
            <li key={ingredient?.strIngredient1}>
              {ingredient?.strIngredient1}
            </li>
          </Link>
        ))}
      </ul>
    );
  };

  alphabetUL = () => {
    return alphabet.map((letter) => (
      <Link to={"/alphabet/" + letter}>
        <span key={letter}>{letter}</span>
      </Link>
    ));
  };

  return [
    categoriesUL(),
    glassesUL(),
    alcoholicUL(),
    ingredientsUL(),
    alphabetUL(),
  ];
};
