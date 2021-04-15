import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../constants/index';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width:150px;
    margin:10px;
    background-color:#282c34;
    color:white;
    padding:20px;

    &:hover {
      background-color: #353839;
      transition: all .5s ease-in-out;
    }
    transition: all .5s ease-in-out;
  }
`

export default function Details(props) {
    const [details, setDetails] = useState(null);
    const { image } = props

    const openDetails = (e) => {
        setDetails(e);
      };

    const closeDetails = (e) => {
        setDetails(null);
      };
    
    useEffect(() => {
        axios
        .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
          console.log(res);
          setDetails(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    useEffect(() => {
        closeDetails()
    }, [image])
    

    return (
        <Container>
          {details && (
            <>
              <h2>Title: {details.title}</h2>
              <p>Copyright: {details.copyright || 'n/a'}</p>
              <p>
                Date: {details.date}
              </p>
              <p className='explanation'>Explanation: {details.explanation}</p>
              <div className='button-details'>
                <button onClick={() => closeDetails()}>Close</button>
              </div>
            </>
          )}
          <div className='button-details'>
            <button onClick={() => openDetails(image)}>Show Details</button>
          </div>
        </Container>
      );
}