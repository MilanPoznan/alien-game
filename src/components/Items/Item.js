import React, { useState, useEffect, useReducer } from 'react'; 
import itemReducer from '../../reducers/itemReducer';
import './item.css';

export default function Items() {
    
    const [items, itemsDispatch] = useReducer(itemReducer, {class: 'no-item', isItemActive: false});

    
    function alienItems(e) {
        let kcode = e.keyCode;
        if ( !items.isItemActive ) {
            if ( kcode === 81 ) {
                itemsDispatch({ type: 'EXTRA_SHIELD' });
                itemsDispatch({ type: 'ITEM_ACTIVE' });
                setTimeout(() => { 
                    itemsDispatch({ type: 'ITEM_INACTIVE' });
                    itemsDispatch({ type: 'NO_ITEM' });
                }, 5000);
            } else if ( kcode === 69 ) {
                itemsDispatch({ type: 'SWORD_ATTACK' });
                itemsDispatch({ type: 'ITEM_ACTIVE' });
                items.isItemActive = true;

                setTimeout(() => { 
                    items.isItemActive = false;
                    itemsDispatch({ type: 'ITEM_INACTIVE' });
                    itemsDispatch({ type: 'NO_ITEM' });
                 }, 3500);
            } 
        } else if (items.isItemActive && kcode === 81 || kcode === 69 ) {
            alert('You can use only one item!');
        }
    }
    useEffect(() => {

        window.addEventListener("keydown", alienItems);

        return () => {
            window.removeEventListener("keydown", alienItems);

        };
    });
    
    return (
        <div className={items.class} ></div>
    )

}