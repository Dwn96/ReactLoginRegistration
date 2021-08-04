import React,{useState} from 'react'
import axios from 'axios';

const Profile = () => {
    
    const [binaryData,setBinaryData] = useState('');

    var imageName = localStorage.getItem('imageName');
    const url = 'http://localhost:8080/api/v1/image/'

    const[image,setImage] = useState('');

    axios.get(url+imageName)
        .then((response)=>{
           setBinaryData(response.data.data);
        })
        .catch((err)=>{
            console.log(err)
        })



    return (
        <div>
            <h1>Hello, {}</h1>
            <img src={`data:image/jpeg;base64,${binaryData}`} />

            
        </div>
    )
}

export default Profile
