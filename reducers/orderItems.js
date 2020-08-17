import orders from '../DBcontext/ordersDB';
// console.log(orders());
// alert(`${orderItems}`);
const orderItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DATA_ORDERS':
            return action.payload;
        default:
            return state;
    }
}

export default orderItems;