import React from 'react'

import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
// import { image } from '../images/depop.png'

const ShoeCull = ({text, updateMode, deleteShoeCull}) => {
    return (
        <div className="shoecull">
            <div className="text">{text}</div>
            
             <div className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteShoeCull} />
                {/* <image className='image' onClick={updateMode} /> */}
            </div>
         </div>
    )
}

export default ShoeCull