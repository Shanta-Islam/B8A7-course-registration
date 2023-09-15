import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res=> res.json())
        .then(data=> console.log(data));
    }, []);
    console.log(courses)
    return (
        <div>
            <h1 className="text-3xl font-bold">Course Registration</h1>
        </div>
    );
};

export default Courses;