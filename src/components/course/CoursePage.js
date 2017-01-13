import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as courseActions from '../../actions/courseActions';

class CoursePage extends  React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title:"" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.courseRow = this.courseRow.bind(this);

  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    //alert(`Saving ${this.state.course.title}`);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}/>

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
    //createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)( CoursePage);
