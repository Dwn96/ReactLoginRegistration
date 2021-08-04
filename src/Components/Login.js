import React,{useState} from 'react'
import './Login.css';

const Login = () => {

    const [enterredEmail,setEnterredEmail] = useState("");
    const [enterredPassword,setEnterredPassword] = useState("");

    const emailChangeHandler = (event) =>{
        setEnterredEmail(event.target.value);
    }

    const passwordChangeHandler = (event) =>{
        setEnterredPassword(event.target.value);
    }

    
    const submitHandler = (event) => {
        event.preventDefault();

        const loginPayload = {
            email:enterredEmail,
            password:enterredPassword
        }

        setEnterredPassword('');
        setEnterredEmail('');

        console.log(loginPayload)
    

    }
    
    return (

        <div onSubmit={submitHandler} class="login-page">
            <div class="form">

                <form class="login-form">
                    <input type="text" value={enterredEmail} placeholder="email" onChange = {emailChangeHandler}/>
                    <input type="password" value={enterredPassword} placeholder="password" onChange = {passwordChangeHandler} />
                    <button type="submit">Login</button>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>

    )
}

export default Login
