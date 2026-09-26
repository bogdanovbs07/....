import { useState } from "react";

function RecipeForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let message = "";
    if (!value.trim()) {
      if (field === "title") message = "Название обязательно";
      if (field === "description") message = "Описание обязательно";
      if (field === "category") message = "Категория обязательна";
    }
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    validate("title", value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    validate("description", value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    validate("category", value);
  };

  const hasErrors =
    !title.trim() ||
    !description.trim() ||
    !category.trim() ||
    Object.values(errors).some((msg) => msg);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasErrors) return;

    onAdd({
      id: Date.now(),
      title,
      description,
      category,
      isFavorite: false,
    });

    setTitle("");
    setDescription("");
    setCategory("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <div>
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={handleTitleChange}
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Описание"
          value={description}
          onChange={handleDescriptionChange}
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Категория"
          value={category}
          onChange={handleCategoryChange}
        />
        {errors.category && <p className="error">{errors.category}</p>}
      </div>

      <button type="submit" disabled={hasErrors}>
        Добавить рецепт
      </button>
    </form>
  );
}

export default RecipeForm;
