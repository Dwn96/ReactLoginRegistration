import React, { useState } from 'react'






const Register = () => {

    const [enterredFirstName, setFirstName] = useState('');
    const [enterredLastName, setLastName] = useState('');
    const [enterredEmail,setEmail] = useState('');
    const [enterredPassword,setPassword] = useState('');
    const [selectedImage,setImage] = useState('');

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
        setImage(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const registrationPayload = {
            firstName:enterredFirstName,
            lastName: enterredLastName,
            email: enterredEmail,
            password: enterredPassword,
            image: selectedImage
        }

        console.log(registrationPayload)

    }


    return (
        <div class="login-page">
            <div class="form">
                <form class="register-form"  >
                    <input onChange = {firstNameChangeHandler} type="text" placeholder="first name" required />
                    <input onChange = {lastNameChangeHandler} type="text" placeholder="last name" required />
                    <input onChange = {emailChangeHandler} type="text" placeholder="email" required />
                    <input onChange = {passwordChangeHandler} type="password" placeholder="password" required />
                    <button>create</button>
                    <p class="message">Already registered? <a href="#">Sign In</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register
