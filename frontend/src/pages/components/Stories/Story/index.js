import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css"
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
const Story = (props) => {
    const {type , data} = props
    return(
        <>
            {
                type === "new" ? (
                <div className='story new'>
                    <FontAwesomeIcon icon={faPlusSquare} size='1' className='addIcon' />
                    <span>Add Story</span>
                </div>
                ) : (
                <div className='story old' style={{ backgroundImage: `url(${data.story_photo})`, backgroundSize : "cover"}}>
                    <div className='user-details'>
                        <img src={data.user_photo}/>
                    </div>
                    <h3> {data.username} </h3>
                </div>
            )}
        </>
    )

}

export default Story;