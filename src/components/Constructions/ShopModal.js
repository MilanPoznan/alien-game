import React, {useEffect, useContext} from 'react'; 

export default function ShopModal (showModal) {
    
    let showModalClass = 'shop__modal shop__modal--visible';
    let hideModalClass = 'shop__modal shop__modal--hide'
    useEffect(() => {
    });

    return (

        <div className={showModal.showModal ? showModalClass : hideModalClass}>
            <ul className="shop__modal-items">
                <li>Sword</li>
                <li>Shield</li>
            </ul>
            <ul className="shop__modal-resources">
                <li>Health Regenerator</li>
                <li>Mana Regenerator</li>
            </ul>
        </div>
    )
}