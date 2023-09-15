import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">Course Registration</h1>
      <div className='grid xl:grid-cols-[1fr_minmax(200px,_300px)] my-10'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
