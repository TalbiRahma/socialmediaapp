import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Navbar = () => {

    return(
        <>
            <div className="navbar">
                <div className="navbar_left">
                    
                    <b>CONNECTIFY</b>

                </div>
                <div className="navbar_right">

                    <div className="navbar_profile_search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="small gray"/>
                        <input type="text" placeholder="Search ..." />
                    </div>

                    <button className="navbar_profile_button">
                        <FontAwesomeIcon icon={faSquarePlus} />{" "}
                        Create
                    </button>

                    <div className="navbar_profile_image">
                    <img src="https://images.pexels.com/photos/17179577/pexels-photo-17179577/free-photo-of-gens-personnes-individus-femme.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;