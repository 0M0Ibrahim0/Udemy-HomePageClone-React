import React, { useContext } from "react";
import CategoriesSection from "./CategoriesSection";
import TopCategories from "./TopCategories";
import { CategoriesContext } from "../App";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  const categories = useContext(CategoriesContext);
  return (
    <div className="home">
      <header className="home-header">
        <div className="header-card">
          <h1>New to Udemy? Lucky you.</h1>
          Courses start at E£169.99. Get your new- student offer before it
          expires.
        </div>
      </header>
      <CategoriesSection categories={categories} />
      <TopCategories />
      <Footer />
    </div>
  );
};

export default Home;
