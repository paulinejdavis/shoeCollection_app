import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const shoeCull = ({text, updateMode, deleteShoeCull}) => {
    return (
        <div className="shoeCull">
            <div className="text">{text}
        </div>
           <div className="icons">
             <BiEdit className='icon' onclick={updateMode} />
            <AiFillDelete className='icon' onclick={deleteShoeCull} />
            </div>
         </div>
    )
}

export default shoeCull