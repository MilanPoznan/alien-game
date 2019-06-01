import React, { useState, useRef, useEffect, useContext } from 'react'; 
import './constructions.scss';
import AlienContext from '../../context/alien-context';

import ShopModal from './ShopModal';

import  setElementPosition from './setElementPosition';
// import constructionReducer from '../../reducers/constructionsReducer';

export default function Shop() {

    const [showModal, setShowModal ] = useState(false);
    const [shopPosition, setShopPosition] = useState({top: '',left: '', bottom: '',  right: '' });

    const { position } = useContext(AlienContext);
    // const shopModal = useRef(null);
    const shopElement =  useRef(null);
   
    
    function openShopModal() {
        setShowModal(true);
    }
    function hideShopModal() {
        setShowModal(false);
    }
   
    function isAlienInShop(alienPosition, shopPosition) {
        let alienBottomSideTop = alienPosition.top + 100;
        if (alienPosition.left > ( shopPosition.left - 25 ) && alienPosition.left < ( shopPosition.right - 25 ) && alienBottomSideTop > shopPosition.top && alienPosition.top < shopPosition.bottom ) {
            openShopModal();
        } else {
            hideShopModal();
        }
    }
    
    useEffect(() => {
        isAlienInShop(position, shopPosition);
    });

    useEffect(() => {
        setElementPosition(shopElement, setShopPosition)
    }, []);
  


    return (
        <div>
            <ShopModal showModal={showModal} />
            <div className='shop' id='main-shop' ref={shopElement} >
                Shop items for you
            </div>
        </div>
    )
}