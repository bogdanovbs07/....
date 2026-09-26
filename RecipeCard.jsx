function RecipeCard({ recipe, onToggleFavorite }) {
  return (
    <div className="recipe-card">
      <span className={recipe.isFavorite ? "star active" : "star"}>★</span>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p>Категория: {recipe.category}</p>
      <button onClick={() => onToggleFavorite(recipe.id)}>
        {recipe.isFavorite ? "Удалить из избранного" : "В избранное"}
      </button>
    </div>
  );
}

export default RecipeCard;
