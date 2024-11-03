import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import UsernameCard from "./components/UsernameCard";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Requests from "./components/Requests";
import Posts from "./components/Posts";


const Home = () => {

    const [connectedUser, setConnectedUser] = useState({});

    const navigate = useNavigate()

    const getConnectedUserData = () => {
        setConnectedUser(JSON.parse(localStorage.getItem("user_data"))); 

        //console.log()
    }

    useEffect( ()=>{
        getConnectedUserData();
        if( localStorage.getItem("user_data") == undefined){
            // if user not connected
            // redirection to login page
            navigate("/login");

        }
    }, []);

    return(
        <>

        <Navbar />
        <div className="layout-app">

            {/* left Box */}
            <div style={{ width : "25%" }}>
                <UsernameCard user={connectedUser}/>
                <Sidebar />
            </div>
            {/* Middle Box */}
            <div style={{ width : "50%" }}>
                <Stories />
                <Posts />
            </div>
            {/* right Box */}
            <div style={{ width : "25%" }}>
                <Requests />
            </div>

        </div>
        
            {/*<h1> Hello {connectedUser.firstname}</h1>*/}
        </>
    );
};

export default Home;