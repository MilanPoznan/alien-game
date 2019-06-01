const resoursesReducer = (state, action) =>  {

    switch (action.type) {
        case 'SPEND_FUEL':
            if (state.fuel < 30 && state.fuel >= 1) {
                return {
                    ...state,
                    fuel: state.fuel - 1,
                    fuelWarningZone: state.fuelWarningZone = true
                }
            } else if (state.fuel < 1) {
                //REturn to default state
                alert('Game over! ');
                return state;
            } else {
                return {
                    ...state,
                    fuel: state.fuel - 1
                }
            }
        case 'ADD_FUEL':
            return console.log(action.type);
        case 'DO_DAMAGE_10' : 
            return {
                ...state,
                health: state.health - 10
            }
        case 'DO_DAMAGE_20' :
            return {
                ...state,
                health: state.health - 20
            }
        case 'DO_DAMAGE_25': 
            return {
                ...state,
                health: state.health - 25
            }
        case 'NO_HEALTH':
            if (window.confirm('NO MORE HEALTH, PLAY AGAIN?')) {
                window.location.reload();
            } else {
                window.location.reload();
            }
             
        default: return state
    }
} 
export { resoursesReducer as default }

