import PropTypes from 'prop-types';

const CartContent = ({course}) => {
    return (
        <div>
            <ul className='list-decimal'>
                <li>{course.title}</li> 
            </ul>
        </div>
    );
};

CartContent.propTypes={
    course: PropTypes.object.isRequired
}
export default CartContent;