import React, { useContext } from 'react';

import AlienContext from '../../context/alien-context';

//Style
import './header.scss';


const Header = () => {

    const { alienResoures } = useContext(AlienContext);
    
    const healthWidth = {
        width: alienResoures.health + '%'
    }
    const fuelWidth = {
        width: alienResoures.fuel + '%'
    }
    const fuelWarnignZone = {
        backgroundColor: !alienResoures.fuelWarningZone ? 'green' : 'red'
    }
    const manaWidth = {
        width: alienResoures.mana + '%'
    }
    const moneyhWidth = {
        width: alienResoures.money + '%'
    }
   
    return (
        <div className='header-bar'>
            <div className='header-bar__resources'>
                <div className='header-bar__health header-bar__separate-resource' style={healthWidth}></div>
            </div>
            <div className='header-bar__resources' style={fuelWarnignZone}  >
                <div className='header-bar__fuel header-bar__separate-resource' style={fuelWidth}></div>
            </div>
            <div className='header-bar__resources' >
                <div className='header-bar__mana header-bar__separate-resource' style={manaWidth}></div>
            </div>
            <div className='header-bar__resources' >
                <div className='header-bar__money header-bar__separate-resource' style={moneyhWidth}></div>
            </div>
        </div>
    )
}

export { Header as default }