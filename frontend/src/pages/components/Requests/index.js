import React from 'react'
import Request from './Request'
import './style.css'
const Requests = () => {

    const requests = [
       {
        username : 'Rahma Talbi',
        profile_image : 'https://images.pexels.com/photos/19651857/pexels-photo-19651857/free-photo-of-femme-modele-portrait-sourire.jpeg?auto=compress&cs=tinysrgb&w=400'
       },
       {
        username : 'yassin bahry',
        profile_image : 'https://images.pexels.com/photos/19651857/pexels-photo-19651857/free-photo-of-femme-modele-portrait-sourire.jpeg?auto=compress&cs=tinysrgb&w=400'
       },
       {
        username : 'Malek Ajili',
        profile_image : 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=400'
       }   
    ]

    return (
        <>
            <div className='requests'>
                <div className='requests-title'>
                    <h4>Requests</h4>
                    <h4 className='requests_numbers'> 5 </h4>
                </div>

                {
                    requests.map( req => <Request data={req}/>)
                }
            </div>
        </>
    )
}

export default Requests