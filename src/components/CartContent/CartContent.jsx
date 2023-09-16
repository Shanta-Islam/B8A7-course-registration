import PropTypes from 'prop-types';

const CartContent = ({course}) => {
    return (
        <div>
            <ul className='list-decimal px-2 m-2'>
                <li className='font-normal text-base'>{course.title}</li> 
            </ul>
        </div>
    );
};

CartContent.propTypes={
    course: PropTypes.object.isRequired
}
export default CartContent;