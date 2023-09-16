import CartContent from "../CartContent/CartContent";
import PropTypes from 'prop-types';

const Cart = ({ selectedCourses, remaining, totalCredit, totalPrice }) => {
    return (
        <div className="mx-2 my-4 bg-white rounded-xl shadow-lg py-4 h-fit px-4">
            <h2 className="text-[#2F80ED] text-lg font-bold">Credit Hour Remaining {remaining} hr</h2>
            <hr />
            <div className=" mx-auto">
                <h3 className="text-xl font-bold mb-3">Course Name</h3>
                {
                    selectedCourses.map((course, index) => <CartContent key={course.id} index={index} course={course}></CartContent>)
                }
                
            </div>
            <hr />
            <h3 className="text-base font-medium mt-4">Total Credit: {totalCredit}</h3>
            <hr />
            <h3 className="text-base font-medium mt-4">Total Price: {totalPrice}</h3>
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