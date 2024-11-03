import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react'
import UserService from '../Services/UserService'
import { Link } from 'react-router-dom';

const Register = () =>{

    const [firstname , setFirstname ] = useState('')
    const [lastname , setLastname ] = useState('')
    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
    const [bio , setBio ] = useState('')
    const [picture , setPicture ] = useState('')
    const [birthdate , setBirthdate ] = useState('')
    const [errors , setErrors] = useState(
        {
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            bio : '',
            birthdate : '',
        }
    )

    const formValidation = () =>{

        let status = true;
        let localErrors = {...errors}

        if (firstname.trim() === ""){
            localErrors.firstname = 'Firstname required';
            status = false;
        }

        if (lastname.trim() === ""){
            localErrors.lastname = 'lastname required';
            status = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            localErrors.email = 'Email required';
            status = false;
        } else if (!emailRegex.test(email)) {
            localErrors.email = 'Invalid email format';
            status = false;
        }

        if (password.trim() === "" || password.length < 8){
            localErrors.password = 'password required and min 8 caracteres';
            status = false;
        }

        if (bio.trim() === '') {
            localErrors.bio = 'Bio required';
            status = false;
        } else if (bio.length > 150) {
            localErrors.bio = 'Bio cannot exceed 150 characters';
            status = false;
        }

        if (birthdate.trim() === '') {
            localErrors.birthdate = 'Birthdate required';
            status = false;
        } else {
            const birthdateObj = new Date(birthdate);
            const today = new Date();
            if (birthdateObj >= today) {
                localErrors.birthdate = 'Birthdate cannot be today or in the future';
                status = false;
            }
        }

        setErrors(localErrors)
        //console.log(localErrors)
        return status;
    }

    const register = async (e) => {
        e.preventDefault();
        console.log("form submited");
       // console.log("form data", firstname, lastname, email, password, bio , birthdate);

        if (formValidation()){

            const data = {
                firstname : firstname,
                lastname : lastname,
                email : email,
                password : password,
                bio : bio,
                birthdate : birthdate,
                picture : picture
            }

            try {
                const response = await UserService.register( data )
                console.log("response ===>",response);
                toast.success('User created Successfully !');
                setFirstname('')
                setLastname('')
                setEmail('')
                setPassword('')
                setBio('')
                setPicture('')
                setBirthdate('')
    
            } catch (err) {
                console.log(err)
                toast.error('Failed while Signup !');
            }
        }else{
            console.log("form invalid");
        }
    }

    

    return(
        <div className='register'>
             <Toaster/>
            <div className='register-cover'> 

            </div>
            <div className='register-content'>
                <div>
                    <h1> CONNECTIFY </h1>
                    <p>Connectify Social Media Application </p>
                </div>
                <div>
                    <form onSubmit={register}>
                        <div className='form-group'>
                            <label > Firstname </label>
                            <input className='input' type='text' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>

                            {
                                errors.firstname != " " ? <div style={{ textAlign:'left' , color : 'orangered'}}>
                                    { errors.firstname }
                                </div> : ''
                            }
                        </div>
                        <div className='form-group'>
                            <label> Lastname </label>
                            <input className='input' type='text' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                            {
                                errors.lastname != " " ? <div style={{ textAlign:'left' , color : 'orangered'}}>
                                    { errors.lastname }
                                </div> : ''
                            }
                        </div>
                        <div className='form-group'>
                            <label> Email </label>
                            <input className='input' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            {
                                errors.email != " " ? <div style={{ textAlign:'left' , color : 'orangered'}}>
                                    { errors.email }
                                </div> : ''
                            }
                        </div>
                        <div className='form-group'>
                            <label> Password </label>
                            <input className='input' type='password'value={password} onChange={(e) => setPassword(e.target.value)}/>
                            {
                                errors.password != " " ? <div style={{ textAlign:'left' , color : 'orangered'}}>
                                    { errors.password }
                                </div> : ''
                            }
                        </div>
                        <div className='form-group'>
                            <label> Bio </label>
                            <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                            {
                                errors.bio != " " ? <div style={{ textAlign:'left' , color : 'orangered'}}>
                                    { errors.bio }
                                </div> : ''
                            }
                        </div>
                        <div className='form-group'>
                            <label> Picture </label>
                            <input className='input' type='file' />
                        </div>
                        <div className='form-group'>
                            <label> Birthdate </label>
                            <input className='input' type='date' value={birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
                            {
                                errors.birthdate != " " ? <div style={{ textAlign:'left' , color : 'orangered'}}>
                                    { errors.birthdate }
                                </div> : ''
                            }
                        </div>
                        <div className="button-signin-link-container">
                            <p className="signin-text">
                                Already have an account? <Link to="/login" className="signup-link">Sign In</Link>
                            </p>
                            <button className="btn signup" type="submit">Sign up</button>
                        </div>
                    </form>
                 </div>
            </div>

            
        </div>
    )

}

export default Register;