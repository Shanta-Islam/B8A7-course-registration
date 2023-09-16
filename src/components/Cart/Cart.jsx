import CartContent from "../CartContent/CartContent";
import PropTypes from 'prop-types';

const Cart = ({selectedCourses}) => {
    return (
        <div className="mx-2 my-4 bg-white rounded-xl shadow-lg p-4 xl:h-2/5">
            <h3>cart : {selectedCourses.length}</h3>
            {
                selectedCourses.map((course)=> <CartContent key={course.id} course={course}></CartContent> )
            }
        </div>
    );
};

Cart.propTypes={
    selectedCourses: PropTypes.object.isRequired
}

export default Cart;