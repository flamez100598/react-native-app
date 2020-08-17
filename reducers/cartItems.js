
import CONSTANT from '../constant/contant'
const cartIimes = (state = [], action) => {
    switch (action.type) {
        case CONSTANT.TYPE.ADD_TO_CART:
        {
            if (state.length == 0) return [...state, {...action.payload, quantity: 1}];
            else {
                var check = true;
                for(let i = 0; i < state.length; i++) {
                    if(state[i].id === action.payload.id) {
                        let quantity = state[i].quantity;
                        state[i].quantity = (quantity !== undefined || quantity) ? ++quantity : 2;
                        check = false;
                    }
                }
                if(check) {
                    return [...state, {...action.payload, quantity: 1}];
                }
                return [...state];
            }
        }
        case CONSTANT.TYPE.REMOVE_FROM_CART:
            for(let i = 0; i < state.length; i++) {
                if(state[i].id === action.payload.id) {
                    if (state[i].quantity > 1) {
                        --state[i].quantity;
                    }
                    else {
                        state.splice(i, 1);
                    }
                } 
            }
            return [...state];
        case CONSTANT.TYPE.EMPTY_CART: 
            return [];
    }
    return state;
}

export default cartIimes;