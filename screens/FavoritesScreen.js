import { useContext } from "react";
import MealsList from "../components/MealsLIst/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;
