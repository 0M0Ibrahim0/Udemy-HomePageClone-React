import React from "react";
import styles from "./CourseListStyle.module.css";
function Card(props) {
  const Courses = props.Courses;

  // function to draw stars
  const draw = (rating) => {
    let course_item = [];

    let ceil = Math.ceil(rating);
    let floor = Math.floor(rating);
    let half_star = ceil - floor;

    while (floor-- > 0) {
      course_item.push(<i class="fa-solid fa-star"></i>);
    }

    if (half_star == 1)
      course_item.push(<i class="fa-regular fa-star-half-stroke"></i>);

    return <span>{course_item}</span>;
  };

  const render = () => {
    let view = Courses.map((course) => {
      return (
        <div className={styles.card}>
          <a href="#">
            <figure>
              <img src={course.image} alt="Python" />
              <figcaption> {course.title} </figcaption>
              <figcaption className="author">{course.author}</figcaption>
              <div>
                <span className={styles.rating}>{course.rating}</span>&nbsp;
                <span className={styles.rating}>{draw(course.rating)}</span>
                <span className={styles.people}>({course.people})</span>
              </div>
              <div className="course-price" style={{ fontWeight: "bold" }}>
                {course.price}
              </div>
            </figure>
          </a>
        </div>
      );
    });
    return view;
  };

  return <div>{render()}</div>;
}

export default Card;
