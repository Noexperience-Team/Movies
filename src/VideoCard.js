import React, { forwardRef } from 'react'
import "./VideoCard.css";
import {ThumbUpSharp}from "@material-ui/icons"
import TextTruncate from "react-text-truncate";
const base_url="https://image.tmdb.org/t/p/original/";
const VideoCard=forwardRef(({movie},ref)=> {

    return (
        <div ref={ref} className="videoCard">
            <img 
                src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                alt="movie poster"
            />
            <TextTruncate
                line={2}
                elemnt="p"
                truncateText="..."
                text={movie.overview}
            
            />
            <h2>{movie.original_title||movie.title || movie.name}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} •`}
                {" "}
                {movie.release_date || movie.first_air_date} •
                {" "}
                <ThumbUpSharp/>{" "}
                {movie.vote_average}</p>
        </div>
    )
}
)
export default VideoCard 
