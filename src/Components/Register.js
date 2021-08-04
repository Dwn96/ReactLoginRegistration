import React, { useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const Register = () => {
    const history = useHistory();

    const [enterredFirstName, setFirstName] = useState('');
    const [enterredLastName, setLastName] = useState('');
    const [enterredEmail,setEmail] = useState('');
    const [enterredPassword,setPassword] = useState('');
    const [selectedImage,setImage] = useState('');

    const[post,setPost] = useState(null);

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
        
    }

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const imageUploadHandler = (event) => {
        setImage(event.target.files[0]);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        var form = new FormData();
/*
        form.append('user', JSON.stringify({
            'firstName':enterredFirstName,
            'lastName': enterredLastName,
            'email': enterredEmail,
            'password': enterredPassword

        }))
*/
        form.append('user', new Blob([JSON.stringify({
            'firstName':enterredFirstName,
            'lastName': enterredLastName,
            'email': enterredEmail,
            'password': enterredPassword

        })], {
            type: "application/json"
        }));


        form.append('file',selectedImage);


        localStorage.setItem('imageName',selectedImage.name);
       
        axios.post('http://localhost:8080/api/v1/registration',form)
            .then((response)=>{
                setPost(response.data)
                if(response.data === 'Success'){
                    history.push('/login')
                }
            })
            .catch((err)=>{
                console.log(err)
                setPost(err[0])
            })
        

        console.log(form)

    }

    const warningStyle = {
        color:'red',
        fontSize:13
    }


    return (
        <div class="login-page">
            <div class="form">
                <form class="register-form" onSubmit = {onSubmitHandler} enctype="multipart/form-data">
                    <input onChange = {firstNameChangeHandler} type="text" placeholder="first name" required />
                    <input onChange = {lastNameChangeHandler} type="text" placeholder="last name" required />
                    <input onChange = {emailChangeHandler} type="text" placeholder="email" required />
                    <input onChange = {passwordChangeHandler} type="password" placeholder="password" required />
                    <input onChange = {imageUploadHandler}  type="file" id="img" name="img" accept="image/*" required/>
                    <button>create</button>
                    <p class="message">Already registered? <Link to="/login">Sign In</Link></p>
                    <p style={warningStyle} class="message">{post}</p>
                </form>
            </div>
        </div>
    )
}

export default Register
