import React from "react";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div
      className="course-card"
      onClick={() => {
        navigate(`course/${course.id}`);
      }}
    >
      <img src={course.image} alt={course.title} className="course-img"></img>
      <div className="course-card-body">
        <p className="course-title">{course.title}</p>
        <p className="course-subtitle">{course.instructor}</p>
        <div className="course-rating">
          <p className="course-rating-text">{course.rating}</p>
          <StarRatings
            rating={course.rating}
            starDimension="14px"
            starSpacing="1px"
            starRatedColor="#E59719"
          />
          <p className="course-student-count">({course.studentCount})</p>
        </div>
        <p className="course-price">{course.price}</p>

        {course.bestSeller && (
          <div className="best-seller">
            <p className="best-seller-text">Bestseller</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
