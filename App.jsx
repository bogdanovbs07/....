import { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

const initialRecipes = [
  {
    id: 1,
    title: "Борщ",
    description: "Суп из свёклы",
    category: "Первое",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Пельмени",
    description: "Тесто с мясом",
    category: "Второе",
    isFavorite: true,
  },
];

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const handleToggleFavorite = (id) => {
    setRecipes((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
      )
    );
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  return (
    <div>
      <h1>Рецепты</h1>
      <RecipeForm onAdd={handleAddRecipe} />
      <RecipeList
        recipes={recipes}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;
