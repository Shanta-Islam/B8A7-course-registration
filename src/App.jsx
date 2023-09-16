import { useState } from 'react';
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);
    let count = course.credit;
    let priceCount = course.price;
    if (isExist) {
      return
    }
    else {
      selectedCourses.forEach((item) => {
        count = count + item.credit;
        priceCount = priceCount + item.price;
      })
      const totalRemaining = 20 - count;
      
      if (count > 20) {
        return alert('no')
      }
      else if(remaining <0) {
        return alert('remaining should not be less than 0')
      }
      else{
        setTotalCredit(count);
        setRemaining(totalRemaining);
        setTotalPrice(priceCount);
        setSelectedCourses([...selectedCourses, course])
      }
    }
  }
  // console.log(selectedCourses)
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">Course Registration</h1>
      <div className='grid xl:grid-cols-[1fr_minmax(200px,_300px)] my-10'>
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <Cart selectedCourses={selectedCourses} remaining={remaining} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>
      </div>
    </>
  )
}

export default App
