import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/index'

import Details from './Details'

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
      <h1>NASA Photo of the Day!</h1>
      <img src={image.url} alt={`${image.title}`}></img>
      <Details image={image}/>
    </div>
  );
}

export default App;