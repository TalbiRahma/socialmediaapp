import React from "react";
import "./style.css";

const Post = () =>{
    return(
        <>
            <div className="post">

                <div className="post_user_details">
                    <div className="user_image">
                        <img src="https://images.pexels.com/photos/19651867/pexels-photo-19651867/free-photo-of-femme-etre-assis-modele-jeans.jpeg?auto=compress&cs=tinysrgb&w=400" />
                    </div>
                    <div className="user_name">
                        <h5>Rahma Talbi</h5>
                        <span>14 hours ago</span>
                    </div>
                </div>

                <div className="post_actions"></div>
                <div className="post_content_details">
                    <p>
                        Hello , this is my first post ...
                    </p>
                </div>
                <div className="post_buttons"></div>

            </div>
        </> 
    )
}

export default Post; 