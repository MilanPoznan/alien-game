const alienReducer = (state, action) =>  {

    switch (action.type) {
        case 'MOVE_LEFT':
            return {
                ...state,
                left: state.left - 25
            };
        case 'MOVE_RIGHT':
            return {
                ...state,
                left: state.left + 25
            };
        case 'MOVE_DOWN': 
            return {
                ...state,
                top: state.top + 25
            };
        case 'MOVE_UP':  
            return {
                ...state,
                top: state.top - 25
            };
        case 'EXTRA_SHIELD': 
            return {

            }

        default: return state
    }
} 
export { alienReducer as default }

