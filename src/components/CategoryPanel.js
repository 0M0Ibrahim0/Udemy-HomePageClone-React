import React from "react";
import CoursesSlider from "./CoursesSlider";
import "./CategoryPanel.css";

const CategoryPanel = ({ category }) => {
  return (
    <div className="courses-container">
      <h2>{category.title}</h2>
      <p className="category-description">{category.description}</p>
      <button className="explore-button">Explore {category.name}</button>
      <CoursesSlider courses={category.courses} />
    </div>
  );
};

export default CategoryPanel;
