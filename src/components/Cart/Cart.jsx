import CartContent from "../CartContent/CartContent";
import PropTypes from 'prop-types';

const Cart = ({ selectedCourses, remaining, totalCredit, totalPrice }) => {
    return (
        <div className="mx-2 my-4 bg-white rounded-xl shadow-lg py-4 xl:h-2/5">
            <h2 className="px-2">Credit Hour Remaining {remaining} hr</h2>
            <div className="xl:h-2/4 px-2 mx-auto">
                <h3>Course Name</h3>
                {
                    selectedCourses.map((course) => <CartContent key={course.id} course={course}></CartContent>)
                }
            </div>
            <h3 className="px-2">Total Credit: {totalCredit}</h3>
            <h3 className="px-2">Total Price: {totalPrice}</h3>
        </div>
    );
};

Cart.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    remaining: PropTypes.number,
    totalCredit: PropTypes.number,
    totalPrice: PropTypes.number,
}

export default Cart;