import React, { useState, useEffect, forwardRef } from "react";
import FacebookLogin from 'react-facebook-login';
import { useLocation, useHistory } from "react-router-dom";

export default function Facebook(props){
    const history = useHistory();
    const [auth,setAuth]=useState(false);
    const [name,setName]=useState('');
    const [picture,setPicture]=useState('');

    const responseFacebook = (response) => {
        history.push({
            pathname:
              "/home",
            state: {
              response:response
            },
          });
        console.log(response);
        if(response.status !== 'unknown'){
            setAuth(true)
            setPicture(response.picture.data.url)
            setName(response.name)
        }
    }

    const componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    let facebookData;

    auth ?
    facebookData = (
            <div style={{
                width: '400px',
                margin: 'auto',
                background: '#f4f4f4',
                padding: '20px',
                color: '#000'
            }}>
                <img src={picture} alt={name} />
                <h2>Welcome {name}!</h2>
            </div>
        ) : 
        facebookData = (<FacebookLogin
            appId="886668681950793"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />);
            return (
                <div style={{width:"100%",textAlign:"center",justifyContent:"center",position:"relative",top:"250px"}}>
                    <h1>Click on the button below to login using Facebook</h1>
                    <br />
                    {facebookData}
                </div>
            );
}