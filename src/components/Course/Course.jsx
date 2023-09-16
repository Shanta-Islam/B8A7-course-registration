import PropTypes from 'prop-types';
import dollar from '../../assets/icons/dollar-sign.png';
import creditIcon from '../../assets/icons/credit.png';

const Course = ({ course, handleSelectCourse }) => {
    const { img, title, description, price, credit } = course;

    return (
        <div>
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white h-full">
                <img className="w-full px-6 py-4 rounded-lg" src={img} alt="course-img" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className='px-6 py-4 flex justify-between'>
                    <div className='flex'>
                        <img src={dollar} alt='icon' />
                        <p className='ml-3'> Price: {price}</p>
                    </div>
                    <div className='flex'>
                        <img src={creditIcon} alt='icon'  />
                        <p className='ml-3'>Credit: {credit}hr</p>
                    </div>
                </div>
                <div className="text-center m-5">
                    <button onClick={() => handleSelectCourse(course)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full'>Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func
}
export default Course;