import React from 'react';
import Profile from './../../assets/profile.png';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className="row">

        <div className="board">
          <div className="text-board">
            <h3 className='board-title'>Hello World,</h3>
            <p className='board-text'>My name is <span>Caue Francisco</span>. <br />
             I'm a <span>front-end</span> developer and <span>this</span> is my space!
            </p>
          </div>
        </div>

        <div className="profile-pic">
          <img className='profile' src={Profile} alt="profile" />
        </div>

      </div>
    </div>
  )
}
