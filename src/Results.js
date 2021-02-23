import axios from './axios';
import React, { useEffect, useState } from 'react'
import requests from './requests';
import "./Results.css"
import VideoCard from './VideoCard'
import FlipMove from "react-flip-move" 
function Results({selectedOption}) {
    const [movies,setMovies]= useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(selectedOption);
            console.log(request);
            setMovies(request.data.results);
        }
        fetchData();
    },[selectedOption])
    return (
        <div className="results">
            <FlipMove>
            {movies.map((movie)=>(
                <VideoCard key={movie.id} movie={movie}/>
            )
            )}  
            </FlipMove>
            
            
        </div>
    )
}

export default Results 