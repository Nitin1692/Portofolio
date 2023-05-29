import React from "react";
import '../styles/home.css'
import Nitin from '../assets/IMG_20230517_161132__1_-removebg-preview.png'
import { FaLinkedinIn } from 'react-icons/fa';
import { InstagramOutlined, GithubOutlined } from '@ant-design/icons'

function Intro() {
    function linkedinClick(e) {
        e.preventDefault();
        window.location.href = "https://www.linkedin.com/in/nitinbca/";
      }
      function githubClick(e){
        e.preventDefault();
        window.location.href = "https://github.com/Nitin1692";
      }
      function instagramClick(e){
        e.preventDefault();
        window.location.href = "https://instagram.com/nitin_jain_16?igshid=YmMyMTA2M2Y=";
      }
    return(
      <div className="container">
      <div className="Home">
         <div className="about">
              <p className="software">Software Developer</p>
              <p className="texts">Hi , I'm <span style={{color: 'red'}}>Nitin</span><span className="blog-title-emoji">👋</span></p>
              <p className="country">From India</p>
              <FaLinkedinIn className="linkedin" onClick={linkedinClick} />
              <InstagramOutlined className="insta" onClick={instagramClick} />
              <GithubOutlined className="git" onClick={githubClick} /> 
          </div>
      </div>
          <img src={Nitin} alt="" srcset="" className="pic" />
      </div>
    );
}

export default Intro;