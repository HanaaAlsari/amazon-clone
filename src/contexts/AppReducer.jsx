/* eslint-disable react-refresh/only-export-components */
export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => {
        return amount + item.price;
    }, 0);
};

 
export const initState = {
    basket: [],
    user: null,
};

const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],
            };
             case "REMOVE_FROM_BASKET":

     { 
        const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
    );
    // يبحث داخل basket عن العنصر الذي يملك نفس id المرسل مع الـ action
    
    let newBasket = [...state.basket];
    // يعمل نسخة جديدة من السلة
    
    if (index >= 0) {
        newBasket.splice(index, 1);
        // إذا وجد العنصر يكون الـ index أكبر أو يساوي صفر
        
    } else {
        console.warn(`Can't find the id ${action.id} as it is not in basket!`);
    }
    
    return {
        ...state,
        basket: newBasket,
    }; }
    // هنا يرجع state جديد مع تحديث الـ basket فقط
        default:
            return state;
    }
};

export default AppReducer;