import PropTypes from 'prop-types';

const CartContent = ({course, index}) => {
    // console.log(index);
    return (
        <div>
            <ul className='list-none px-2 m-2'>
                <li className='font-normal text-base'>{index+1}. {course.title}</li> 
            </ul>
        </div>
    );
};

CartContent.propTypes={
    course: PropTypes.object.isRequired,
    index: PropTypes.number
}
export default CartContent;