const constructionReducer = (state, action ) =>  {

    switch (action.type) {
        case 'test': 
            return console.log('test');
            
        default: return state;
    }
}

export { constructionReducer as default }

// const shopReducer = (state, action) => {
//     switch (action.type) {
//         case 'test':
//             return console.log('asd');
    
//         default: return state;
//     }
// }
// export { shopReducer as default }

