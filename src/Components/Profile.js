import React,{useState} from 'react'
import axios from 'axios';
import './Profile.css';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const history = useHistory();
    const [binaryData,setBinaryData] = useState('');

    var imageName = localStorage.getItem('imageName');
    const url = 'http://localhost:8080/api/v1/image/'


    axios.get(url+imageName)
        .then((response)=>{
           setBinaryData(response.data.data);
        })
        .catch((err)=>{
            console.log(err)
        })

        const clickHandler = () =>{
            history.push('/login');
        }



    return (
        <div className='centered'>
            
            {/* <img className='www' src={`data:image/jpeg;base64,${binaryData}`} /> */}

            <div id="main-card">
        <div class="cover-photo"></div>
        <div class="photo">
        <img className='www' src={`data:image/jpeg;base64,${binaryData}`} alt="user"/>
        </div>
        <div class="content">
            <h2 class="name">Dan Njeru</h2>
          <h3 class="fullstack">Full Stack <br />Springboot | <a href="https://www.youracclaim.com/badges/e678fb12-49ea-4609-8d97-622d7416880d" class="certified" target="_blank">Nodejs</a></h3>
            <h3 class="email">
                <a href="mailto:abbassi.abdeladhim31791@gmail.com">{localStorage.getItem('email')}</a>
            </h3>
        </div>
        <div className='centerredBtn'>
        <button onClick = {clickHandler}>Log out</button>
        </div>
       
    </div>



            
        </div>
    )
}

export default Profile
