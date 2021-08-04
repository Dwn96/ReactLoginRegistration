import React,{useState} from 'react'
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const [enterredEmail,setEnterredEmail] = useState("");
    const [enterredPassword,setEnterredPassword] = useState("");

    const[post,setPost] = useState(null);

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

        axios.post('http://localhost:8080/api/v1/login',loginPayload)
            .then((response)=>{
                setPost(response.data)
                if(response.data === "Success"){
                    console.log('Logged in')
                    history.push("/profile")
                }
            })

        setEnterredPassword('');
        setEnterredEmail('');

        console.log(loginPayload)
    

    }
    const warningStyle = {
        color:'red',
        fontSize:13
    }
    
    return (

        <div onSubmit={submitHandler} class="login-page">
            <div class="form">

                <form class="login-form">
                    <input type="text" value={enterredEmail} placeholder="email" onChange = {emailChangeHandler}/>
                    <input type="password" value={enterredPassword} placeholder="password" onChange = {passwordChangeHandler} />
                    <button type="submit">Login</button>
                    <p class="message">Not registered? <Link to ="/register"> Create an account</Link></p>
                    <p style={warningStyle} class="message">{post}</p>
                </form>
            </div>
        </div>

    )
}

export default Login
