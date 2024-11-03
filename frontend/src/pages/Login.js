import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react'
import UserService from '../Services/UserService'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')

    const [errors , setErrors] = useState(
        {
            email : '',
            password : '',
        }
    )

    const formValidation = () =>{

        let status = true;
        let localErrors = {...errors}

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

        setErrors(localErrors)
        //console.log(localErrors)
        return status;
    }

    const signin = async (e) =>{
        e.preventDefault();
        console.log("form submited");

        if (formValidation()){

            const data = {
                email : email,
                password : password,
            }

            try {
                const response = await UserService.signin( data )
                console.log("response ===>",response);
                
                //save user data localstorage
                localStorage.setItem('user_data',JSON.stringify(response.data.user))
                localStorage.setItem('token', response.data.token)


                toast.success('User login Successfully !');
                setEmail('')
                setPassword('')

                //redirection
                navigate("/home")

    
            } catch (err) {
                console.log(err)
                toast.error(err.response.data.message);
            }
        }else{
            console.log("form invalid");
        }
        
    }
    return(
        <div className='login'>
             <Toaster/>
            <div className='login-cover'> 

            </div>
            <div className='login-content'>
                <div>
                    <h1> CONNECTIFY </h1>
                    <p>Connectify Social Media Application </p>
                </div>

                <div>
                    <form onSubmit={signin}>
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

                        <div className="button-signup-link-container">
                            <p className="signup-text">
                                Don’t have an account? <Link to="/register" className="signup-link">Sign Up</Link>
                            </p>
                            <button className="btn signin" type="submit">Sign In</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
        
        
      
    )
}

export default Login;