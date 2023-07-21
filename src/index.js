import React from 'react';
import ReactDOM from 'react-dom/client';
import {Logo,TitleText} from './logo';
import ApiCall from './spotifydata';
import {useEffect, useState} from "react";

import './style.css';
import "typeface-roboto";

var client_id = '042b0ad43172402f84e6b23e6938444d';
var client_secret = 'ca1b8000b80b470b9766578a6183df9b';

function App(){
  const [accessToken, setAccessToken] = useState("");
    
    useEffect(() => {
    
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(r => r.json()).then(data => {
              setAccessToken(data.access_token)
      })
      console.log(accessToken);
      const token = {accessToken};
      console.log(token)
      },[]) 
  return ( 
    <div>
     <Logo/>
     <TitleText/> 
    <ApiCall accessToken = {accessToken}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)