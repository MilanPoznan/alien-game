const itemReducer = (state, action) =>  {

    switch (action.type) {
        case 'EXTRA_SHIELD':
            console.log(state);
            return {
                ...state, 
                class: 'shield',
                isItemActive: true
            }
        case 'SWORD_ATTACK':
            return {
                ...state, 
                class: 'sword',
                isItemActive: true
            }
        case 'NO_ITEM':
            return {
                ...state, 
                class: 'no-item',
                isItemActive: false
            }
        default: return state
    }
} 
export { itemReducer as default }

