import React from "react";
import Story from "./Story"
import './style.css'
const Stories = () => {
       
    const stories = [
        {
            username : "Rahma",
            user_photo : "https://images.pexels.com/photos/17179577/pexels-photo-17179577/free-photo-of-gens-personnes-individus-femme.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            story_photo : "https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            username : "Rim",
            user_photo : "https://images.pexels.com/photos/17179577/pexels-photo-17179577/free-photo-of-gens-personnes-individus-femme.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            story_photo : "https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            username : "Hanine",
            user_photo : "https://images.pexels.com/photos/17179577/pexels-photo-17179577/free-photo-of-gens-personnes-individus-femme.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            story_photo : "https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
    ]
    return(
        <>
            <div className="stories">
                <Story type="new"/>
                {
                    stories.map(story => <Story type="old" data={story}/>)
                }
            </div>
            
        </>
    );
};

export default Stories;