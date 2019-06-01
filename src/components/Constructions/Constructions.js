import React, { useReducer } from 'react'; 
// import constructionReducer from '../../reducers/constructionReducer';
import alienReducer from '../../reducers/constructionsReducer';

//Elements
import Shop from './Shop.js';

//Style
import './constructions.scss';

export default function Constructions() {
    
    const [constructions, constructionsDispatch] = useReducer(alienReducer, '');

    return (
        <div>
            <Shop />
        </div>
    )
}


