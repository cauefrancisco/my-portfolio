import React from 'react';
import { FaDocker, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoIosCafe } from 'react-icons/io';
import { SiMysql, SiTypescript } from 'react-icons/si';
import { TbBrandAngular, TbBrandJavascript } from 'react-icons/tb';
import profile from './../../assets/profile.png';
import './About.css';


export default function About() {

  
  
  return (
    <div className='about'>
      <div className="profile row">

        <div className="profile-pic">
          <img src={profile} className="pic" alt="" />
        </div>

        <div className="intro col">
          <h1 className='intro-title'>Hey! <IoIosCafe className='spanWhite'/> </h1>
          <p>
            I'm Caue Francisco, a Front-end Software developer. 
            I've been working in the industry for about 2 years.
          </p>
        </div>
        
        <div className="iconsContainer">
          <ul className='iconsList'>
            <li className='icons'><TbBrandJavascript/></li>
            <li className='icons'><TbBrandAngular /></li>
            <li className='icons'><FaReact /></li>
            <li className='icons'><SiTypescript /></li>
            <li className='icons'><FaNodeJs /></li>
            <li className='icons'><SiMysql /></li>
            <li className='icons'><FaDocker /></li>
          </ul>
        </div>

        

      </div>

      <div className="projects">
      {/* <GithubCards /> */}
      </div>

      <div className="resume">
        
      </div>
    </div>
  )
}
