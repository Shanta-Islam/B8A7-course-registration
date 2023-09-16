import PropTypes from 'prop-types';

const CartContent = ({course}) => {
    return (
        <div>
             <li>{course.title}</li>
        </div>
    );
};

CartContent.propTypes={
    course: PropTypes.object.isRequired
}
export default CartContent;