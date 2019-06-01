import React, { useState, useContext, useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';

//Context 
import AlienContext from '../../context/alien-context';

//Style
import './monster.scss';

//Functions 
import  setElementPosition from '../Constructions/setElementPosition';

function fireRocket (element, duration, targetPositionTop, targetPositionleft, alienCurrentPosition,  finalRocketAnimationAnimation, callbackOnComplete, rocketNumber, doDamageFunction, resource)  {
    console.log(resource.current);
    
    let rocketAnimation = TweenMax.to(
        element,
        duration,
        {
            top: targetPositionTop,
            left: targetPositionleft,
            onUpdate: () => {
                //Rocket Position
                let rocketTop = element.offsetTop;
                let rocketLeft = element.offsetLeft;
                let rocketBottom = rocketTop + element.clientHeight;
                let rocketRight = rocketLeft + element.clientWidth;
               
                //Alien Position
                let alienTopPosition = alienCurrentPosition.current.top;
                let alienLeftPosition = alienCurrentPosition.current.left;
                let alienBottomPosition = alienTopPosition + 100;
                
                //Check is rocket shot alien
                if ( alienLeftPosition < rocketRight && alienBottomPosition >= rocketTop  /*&& rocketRight < position.right && rocketBottom > position.bottom */) {
                    console.warn('BOOM');
                    if (rocketNumber === 1) {
                        if (resource.current > 10) {
                            doDamageFunction({type: 'DO_DAMAGE_10'});
                        } else {
                            doDamageFunction({type: 'NO_HEALTH'});
                        }
                    } else if (rocketNumber === 2) {
                        if (resource.current > 20) {
                            doDamageFunction({type: 'DO_DAMAGE_20'});
                        } else {
                            doDamageFunction({type: 'NO_HEALTH'});
                        }
                    } else {
                        if (resource.current > 25) {
                            doDamageFunction({type: 'DO_DAMAGE_25'});
                        } else {
                            doDamageFunction({type: 'NO_HEALTH'});
                        }
                    }
                    rocketAnimation.kill();
                    finalRocketAnimationAnimation(element);
                    return callbackOnComplete();
                }   
            },
            onComplete: () => {
                console.log('COMPLETE');
                finalRocketAnimationAnimation(element);
                callbackOnComplete();
            }
        }

    );
    //  return rocketAnimation;

}

export default function MonsterOne() {

    //Element 
    const monsterOneElement = useRef(null);
    const rockets = useRef(null);
    const rocketOneElement = useRef(null);
    const rocketTwoElement = useRef(null);
    const rocketThreeElement = useRef(null);
    const alienPositionRef = useRef(null);
    const alienHealth = useRef(null)
    //MOnster state
    const [monsterOnePosition, setMonsterOnePosition] = useState({top: '',left: '', bottom: '',  right: '' });
    const [rocketOnePosition, setRocketOnePosition] = useState({top: '',left: '', bottom: '',  right: '' });
    
    //Rocket state 
    const [rocketOne, setRocketOne] = useState({isFired: false, isExploded: false});
    
    //Alien position
    const { position, alienResoures, dispatchAlienResourses } = useContext(AlienContext);
    // const alienHealth = alienResoures.health;

    alienPositionRef.current = position;
    alienHealth.current = alienResoures.health;


    function isAlienInMonsterDangerousZone(alienPosition, monsterOneArea) {
        let alienBottom = alienPosition.top + 110;
        if (alienPosition.left < monsterOneArea.right && alienBottom > monsterOneArea.top ) {
            if (!rocketOne.isFired) {
                fireRocketOne();
                setRocketOne({isFired: true});
            } 
        }
    }
    function fireRocketOne() {
        console.log('Pucaj prvu raketu');
        fireRocket(rocketOneElement.current, 1,position.top, position.left, alienPositionRef, finalRocketAnimationAnimation, fireRocketTwo, 1, dispatchAlienResourses, alienHealth );
    }
    function fireRocketTwo() {
        console.log('Pucaj drugu raketu');
        fireRocket(rocketTwoElement.current, 2, alienPositionRef.current.top, alienPositionRef.current.left, alienPositionRef, finalRocketAnimationAnimation, fireRocketThree,  2, dispatchAlienResourses, alienHealth );

    }
    function fireRocketThree() {
        console.log('Pucaj trecu raketu');
        fireRocket(rocketThreeElement.current, 3,alienPositionRef.current.top, alienPositionRef.current.left, alienPositionRef, finalRocketAnimationAnimation, fireAllRockets, 3, dispatchAlienResourses, alienHealth );
    }
    function fireAllRockets() {
        console.log('SVE SI ISPUCAO MAJMUNEEEE');
    }

    //Rocket animation
    function finalRocketAnimationAnimation(rocketElem) {
        return TweenMax.to(
            rocketElem,
            1,
            {
                rotation: 360,
                display: 'none'
            }
        );
    }

    //On each render 
    useEffect(() => {
        isAlienInMonsterDangerousZone(position, monsterOnePosition);
    });
    // Only on begining 
    useEffect(() => {
        setElementPosition(monsterOneElement, setMonsterOnePosition);
        setElementPosition(rocketOneElement, setRocketOnePosition);
    }, []);

    return (
        <>
            <div className='monster-area' ref={monsterOneElement}>
                <div className='monster monster__one' id='monster-one'></div>
            </div>
            <ul className='monster__rockets' ref={rockets}>
                <li className='monster__rocket monster__rocket--orange' ref={rocketOneElement}></li>
                <li className='monster__rocket monster__rocket--black' ref={rocketTwoElement}></li>
                <li className='monster__rocket monster__rocket--red' ref={rocketThreeElement}></li>
            </ul>
        </>
    )
}