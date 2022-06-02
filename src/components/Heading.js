import React from 'react'
import bobbleParty from '../images/Group.png'
import BobblesGroup from '../images/BobblesGroup 1.png'
import '../style/heading.css'
export const Heading = () => {
    return (
        <div className='heading'>
            <div className="bobble-party">
                <img src={bobbleParty} alt="" />
            </div>
            <div className="bobble-group">
                <img src={BobblesGroup} alt="" />
            </div>
        </div>
    )
}
