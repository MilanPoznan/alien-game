import React, { useRef, useEffect, useReducer } from 'react';
import './alien.scss';

//Reducers
import alienReducer from '../../reducers/alienReducer';
import resoursesReducer from '../../reducers/resoursesReducer';

//Elements
import Item from '../Items/Item';
import Header from '../Header/Header';
import Constructions from '../Constructions/Constructions';
import MonsterOne from '../Monsters/MonsterOne';

//Context
import AlienContext from '../../context/alien-context';

export default function Alien() {
	const [position, positionDispatch] = useReducer(alienReducer, {
		left: 200,
		top: 200,
	});
	const [alienResoures, dispatchAlienResourses] = useReducer(resoursesReducer, {
		fuel: 100,
		health: 100,
		money: 50,
		mana: 100,
		fuelWarningZone: false,
	});

	//DOM Elements
	const aleinEl = useRef(null);

	function moveAlien(e) {
		e.preventDefault();
		let kcode = e.keyCode;
		switch (kcode) {
			case 83:
				positionDispatch({ type: 'MOVE_DOWN' });
				dispatchAlienResourses({ type: 'SPEND_FUEL' });
				break;
			case 65:
				positionDispatch({ type: 'MOVE_LEFT' });
				dispatchAlienResourses({ type: 'SPEND_FUEL' });
				break;
			case 87:
				positionDispatch({ type: 'MOVE_UP' });
				dispatchAlienResourses({ type: 'SPEND_FUEL' });
				break;
			case 68:
				positionDispatch({ type: 'MOVE_RIGHT' });
				dispatchAlienResourses({ type: 'SPEND_FUEL' });
				break;
		}
	}
	useEffect(() => {
		window.addEventListener('keydown', moveAlien);
		return () => {
			window.removeEventListener('keydown', moveAlien);
		};
	});

	return (
		<>
			<AlienContext.Provider
				value={{ position, alienResoures, dispatchAlienResourses }}
			>
				<Header />
				<MonsterOne />
				<Constructions />
			</AlienContext.Provider>
			<div id="alien-figure" style={position} ref={aleinEl}>
				<Item />
			</div>
		</>
	);
}
