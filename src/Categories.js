import React from "react";
//top, general, world, nation, business, technology, entertainment, sports, science and health.
const CategoryTabs = ({ category, handleCategory }) => {
  const categories = [
    "top",
    "world",
    "business",
    "politics",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  return (
    <div>
      {categories.map((cat) => (
        <div
          onClick={() => handleCategory(cat)}
          key={cat}
          className={` ${category === cat ? "" : ""}`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
