import React from 'react'
import '../styles/about.css'



function Abouts() {
  return (
    <div className="About">
        <h3 className='aboutMe'>About &nbsp;<span style={{color: 'red'}}> Me</span></h3>
        <hr className='Line' />
        <p className="Career"> <pre> Hi I'm <span style={{color: 'red'}}>Nitin Jain</span>, Graduated from BCA Department. I want to make use of my <br /> interpersonal skills to achieve the goals of a company that focuses on customer satisfaction and customer experience. </pre></p>
        <div className="skills">
            <h3 className="skill"> <span style={{color: 'red'}}>S</span>kills-</h3>
            <hr className='lineSkill' />
        </div>
        <div className="containers">

            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">100%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">100%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">React</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Python</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">100%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">SQL</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">100%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Java</span>
                <div className="skill-bar">
                    <span className="skill-per expressjs">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Abouts;