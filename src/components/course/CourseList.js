import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, deleteCourse}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>&nbsp;</td>
          <td>Title</td>
          <td>Author</td>
          <td>Category</td>
          <td>Length</td>
        </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func
};

export default CourseList;
