import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CourseContent from './CourseContent';
import CourseHeader from './CourseHeader';
import ExpandableHTMLContainer from './ExpandableHTMLContainer';
import CourseFooter from './CourseFooter';
import InstructorCard from './InstructorCard';
import Reviews from './Reviews';
import StudentFeedback from './StudentFeedback';
import { CoursesContext } from '../App';
import './CoursePage.css';

const CoursePage = () => {
	const courseId = useParams().courseId;
	const courses = useContext(CoursesContext);
	if (Object.keys(courses).length === 0) {
		return <p>Loading ...</p>;
	}
	const course = courses[courseId];
	return (
		<div className='course-page'>
			<CourseHeader courseInfo={course.info} />
			<div className='course-page-body'>
				<div className='section section-box container'>
					<div className='section-title'>What you&#39;ll learn</div>
					<div className='row row-cols-6'>
						{course.learnGoals.map((goal) => (
							<div key={goal} className='col-6 sub-title'>
								{goal}
							</div>
						))}
					</div>
				</div>
				<div className='section '>
					<div className='section-title'>Course content</div>
					<CourseContent content={course.content} />
				</div>
				<div className='section'>
					<div className='section-title'>Requirements</div>
					<ul>
						{course.requirments.map((req) => (
							<li key={req}>{req}</li>
						))}
					</ul>
				</div>
				<div className='section'>
					<div className='section-title'>Description</div>
					<ExpandableHTMLContainer
						id='course-description'
						innerHtml={course.description}
					/>
				</div>
				<div className='section'>
					<div className='section-title'>Instructors</div>
					{course.instructors.map((instructor) => (
						<InstructorCard key={instructor.name} instructor={instructor} />
					))}
				</div>
				<div className='section'>
					<div className='section-title'>Student feedback</div>
					<StudentFeedback feedback={course.feedback} />
				</div>
				<div className='section'>
					<div className='section-title'>Reviews</div>
					<Reviews reviews={course.reviews} />
				</div>
			</div>
			<CourseFooter />
		</div>
	);
};

export default CoursePage;
