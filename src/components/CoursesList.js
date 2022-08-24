import React from "react";
import Card from "./Card";
import styles from "./CourseListStyle.module.css";
function CoursesList() {
  const Title = "Expand your career opportunities with Python";
  const Desc =
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to ...";

  const courses = [
    {
      id: 1,
      link: "https://www.udemy.com/course/pythonforbeginners/",
      image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      price: "E£679.99",
      title: "Learn Python: The Complete Python Programming Course",
      author: "Avinash Jain,The Codex",
      people: "2,948",
      rating: 4.4,
    },
    {
      id: 2,
      link: "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
      image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      price: "E£1,599.99",
      title: "Learning Python for Data Analysis and Visualization",
      author: "Jose Portilla",
      people: "17,999",
      rating: 4,
    },
    {
      id: 3,
      link: "https://www.udemy.com/course/python-for-beginners-learn-programming-from-scratch/",
      image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
      price: "E£679.99",
      title: "Python for Beginners - Learn Programming from scratch",
      author: "Edwin Diaz, Coding FAcutly Solutaions",
      people: "1,781",
      rating: 4.4,
    },
    {
      id: 4,
      link: "https://www.udemy.com/course/learn-python/",
      image: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
      price: "E£319.99",
      title: "Learn Python: Python for Beginners",
      author: "Abrar Hussain",
      people: "2,773",
      rating: 4.3,
    },
    {
      id: 5,
      link: "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
      image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
      price: "E£519.99",
      title: "Python Beyond the Basics - Object-Oriented Programming",
      author: "Infinite Skills",
      people: "2,930",
      rating: 4.4,
    },
    {
      id: 6,
      link: "https://www.udemy.com/course/selenium-webdriver-and-python/",
      image: "https://img-c.udemycdn.com/course/480x270/482754_7146_6.jpg",
      price: "E£1,299.99",
      title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
      author: "Admas Kinfu",
      people: "1,813",
      rating: 4.7,
    },
    {
      id: 7,
      link: "https://www.udemy.com/course/teach-your-kids-to-code/",
      image: "https://img-c.udemycdn.com/course/480x270/519554_da68_6.jpg",
      price: "E£319.99",
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      author: "Bryson Payne",
      people: "8,809",
      rating: 4.5,
    },
    {
      id: 8,
      link: "https://www.udemy.com/course/python-for-data-structures-algorithms-and-interviews/",
      image: "https://img-c.udemycdn.com/course/480x270/535622_3bc0.jpg",
      price: "E£1,299.99",
      title: "Python for Data Structures, Algorithms, and Interviews!",
      author: "Jose Portilla",
      people: "10.701",
      rating: 4.5,
    },
    {
      id: 9,
      link: "https://www.udemy.com/course/automate/",
      image: "https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg",
      price: "E£519.99",
      title: "Automate the Boring Stuff with Python Programming",
      author: "Al Sweigart",
      people: "101,703",
      rating: 4.7,
    },
    {
      id: 10,
      link: "https://www.udemy.com/course/complete-python-bootcamp/",
      image: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
      price: "E£729.99",
      title: "2022 Complete Python Bootcamp From Zero to Hero in Python",
      author: "Jose Portilla",
      people: "427,994",
      rating: 4.6,
    },
  ];

  return (
    <>
      <div className={styles.course_container}>
        <h3 className="sectionTitle">{Title}</h3>
        <div className="words">
          <p className="desc">{Desc}</p>
        </div>
        <a href="#" className={styles.python_explore}>
          Explore Python
        </a>
        <div className={styles.courses_list}>
          <Card className={styles.Card} Courses={courses} />
        </div>
      </div>
    </>
  );
}

export default CoursesList;
