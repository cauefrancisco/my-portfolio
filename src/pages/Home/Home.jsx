import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
// import Profile from './../../assets/profile.png';
import './Home.css';


export default function Home() {

  return (
    <div className='home'>
      <div className="row">

        <div className="board">
          <div className="text-board">

          <TypeWriterEffect
          className='typewriter'
        textStyle={{
          fontWeight: 500,
          fontSize: '10dvw',
          color: `#EBECE8`,
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hello World,',
          `My name is Caue Francisco`,
          "I'm a front-end developer",
        ]}
        multiTextDelay={1500}
        typeSpeed={50}
        multiTextLoop={true}
      />
          </div>
        {/* <div className="profile-pic">
          <img className='profile' src={Profile} alt="profile" />
        </div> */}
        </div>


        {/* <TypeWriterEffect
        textStyle={{
          fontWeight: 500,
          fontSize: '2dvw',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hello World,',
          'My name is Caue Francisco',
          "I'm a front-end developer",
        ]}
        multiTextDelay={1500}
        typeSpeed={50}
        multiTextLoop={true}
      /> */}

      </div>
    </div>
  )
}
