import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleSelectCourse}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    
    return (
        <div className="mx-6 my-4">
            <div className="grid lg:grid-cols-3 gap-5">
                {
                    courses.map(course => <Course key={course.id} course={course} handleSelectCourse={handleSelectCourse}></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes ={ 
    handleSelectCourse: PropTypes.func
}
export default Courses;