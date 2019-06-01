import React, { useState } from 'react';

//Elements
import Alien from '../Alien/Alien';
//Context 
import './world.scss';


export default function World() {

    const [world, setWorld] = useState('world-1');

    return (
        <div id='world' className={world} >

            {/* <div class="world-overlay"></div> */}
            Alien World
            <Alien />
            <div onClick={() => setWorld('world-2')} className="change-world">Change World</div>
        </div>
    )
}