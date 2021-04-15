import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/index'
import styled from 'styled-components'

import Details from './Details'

const Image = styled.div`
  border: 1px solid gray;
  padding:10px;
  margin:10px;

  &:hover {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
    transform: scale(1.02);
  }
  transition: all .5s ease-in-out;

`

const H1 = styled.h1`
  color:white;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 2px 3px 0 #000;
  
  &:hover {
    transform: scale(2);
    transition: all 1s ease-in-out;
  }
  transition: all 1s ease-in-out;
`

function App() {
  const [image, setImage] = useState([]);


  useEffect(() => {
    axios
    .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then(res => {
      //console.log(res);
      setImage(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <H1>NASA's Astronomy Photo of the Day!</H1>
      <Image>
        <img src={image.url} alt={`${image.title}`}></img>
      </Image>
      <Details image={image}/>
    </div>
  );
}

export default App;