const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    },
    totalPrice: 0,
    purchasable: false
};

const PRICES = {
    meat: 5,
    salad: 1,
    cheese: 2,
    bacon: 3
};

const builderPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ING':
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ing]: state.ingredients[action.payload.ing]+1,

                },
                totalPrice: state.totalPrice+PRICES[action.payload.ing],



            }
        case 'REMOVE_ING':
            let oldCount = state.ingredients[action.payload.ing];
            console.log(action.payload.ing)
            if (oldCount>0){
                return {
                    ...state,

                    ingredients: {
                        ...state.ingredients,
                        [action.payload.ing]: state.ingredients[action.payload.ing]-1
                    },
                    totalPrice: state.totalPrice+PRICES[action.payload.ing],
                    purchasable: state.totalPrice>0
                }

            }
            else return state;

        case 'SET_PURCHASABLE':
            return {
                ...state,
        purchasable: state.totalPrice>0
            }
        default:
            return state
    }
}

export default builderPageReducer;