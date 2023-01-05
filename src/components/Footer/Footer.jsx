import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className='footer'>
      <div className="row m-0"> 
        <div className="col-4 footer-copywright">
        <h4 className='fluid-text'>Designed and Developed by Caue Francisco</h4>
        </div>

        <div className="col-4 footer-copywright">
        <h4 className='fluid-text'>Copyright © {year} Caue Francisco</h4>
        </div>

        <div className="col-4 icons-container">
            <ul>
              <li><a href='/'><BsLinkedin className='icon'/></a></li>
              <li><a href='/'><BsGithub className='icon'/></a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}
