import { useState } from 'react';
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const handleSelectCourse = (course)=>{
    const isExist = selectedCourses.find((item)=> item.id===course.id);
    if(isExist){
      return
    }
    else{
      setSelectedCourses([...selectedCourses, course])
    }
  }
  // console.log(selectedCourses)
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">Course Registration</h1>
      <div className='grid xl:grid-cols-[1fr_minmax(200px,_300px)] my-10'>
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <Cart selectedCourses={selectedCourses}></Cart>
      </div>
    </>
  )
}

export default App
