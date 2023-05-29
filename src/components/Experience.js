import React from 'react'
import '../styles/experience.css'
import IME from '../assets/IME.png'
import UEM from '../assets/UEM.png'
import CII from '../assets/CII.png'
import Ureckon from '../assets/Ureckon.png'

function Experience() {
  return (
<div className="experience">
    <h3 className="myExperience">My &nbsp;<span style={{color: 'red'}}>Experience</span></h3>
    <div className="timeline">
        <div className="cont left-cont">
            <img src={IME} alt="" srcset="" className="Ime" />
            <div className="text-box">
                <h2 className="international">International Mining Exhibition</h2>
                <small className="a">2022</small>
            </div>
        </div>
        <div className="cont right-cont">
            <img src={Ureckon} alt="" srcset="" className="Ime" />
            <div className="text-box">
                <h2 className="international">Ureckon</h2>
                <small className="a">2022</small>
            </div>
        </div>
        <div className="cont left-cont">
            <img src={UEM} alt="" srcset="" className="Ime" />
            <div className="text-box">
                <h2 className="international">Department Project</h2>
                <small className="a">2022</small>
            </div>
        </div>
        <div className="cont right-cont">
            <img src={CII} alt="" srcset="" className="Ime" />
            <div className="text-box">
                <h2 className="international">Confederation of Indian Industry</h2>
                <small className="a">2022</small>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience