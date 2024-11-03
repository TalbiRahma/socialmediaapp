import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons';

import './style.css'

const NewPost = () =>{

    return(
        <>
        
            <div className='new_post'>
                <div className='new_post_details'>
                    <div className='new_post_profile_image'>
                        <img src="https://images.pexels.com/photos/22944781/pexels-photo-22944781/free-photo-of-ville-monument-rue-voyager.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"/>

                    </div>
                    <div className='new_post_textbox'>
                        <textarea placeholder="what's in your mind ..."></textarea>
                    </div>
                </div>
                <div className='new_post_buttons'>
                    <button>
                        <FontAwesomeIcon icon={faShare} />
                        Post it!
                    </button>
                </div>
            </div>
        </>
    )
}

export default NewPost;