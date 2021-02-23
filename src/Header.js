import React from 'react';
import "./Header.css";
import ne from './ne.png'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function Header() {
    return (
        //Bem naming class
        <div className="header">
          
            <div className="header__icons">
                {/* all icons here*/}
                <div className="header__icon header__icon--active">
                <HomeIcon/>
                <p>Home</p>
                </div>
               
                <div className="header__icon">
                <FlashOnIcon/>
                <p>Trending</p>
                </div>
                
                <div className="header__icon">
                <LiveTvIcon/>
                <p>Verified</p>
                </div>
                
                <div className="header__icon">
                <VideoLibraryIcon/>
                <p>Collections</p>
                </div>
                
                <div className="header__icon">
                <SearchIcon/>
                <p>Search</p>
                </div>
                
                <div className="header__icon">
                    <PersonOutlineIcon/>
                    <p>Account</p>
                </div>
                

            </div>
            <img 
                src="https://static.wixstatic.com/media/303833_10b63361209e471d9edecac27ccc21fc~mv2.png/v1/fill/w_640,h_538,al_c,q_85,usm_0.66_1.00_0.01/303833_10b63361209e471d9edecac27ccc21fc~mv2.webp"
                alt=""/>
        </div>
    )
}

//Bem naming class
export default Header
