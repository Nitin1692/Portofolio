import React, {useState} from 'react'
import '../styles/project.css'
import { SliderData } from '../helpers/SliderData';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import {AiOutlineCaretRight} from 'react-icons/ai'
import { GithubOutlined } from '@ant-design/icons'

function Project({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  function handleClick(e){
    if(SliderData){
      e.preventDefault();
      window.location.href = "https://github.com/Nitin1692";
    }
  }

  return (
    <div className="Project">
        <h3 className="myProject">My &nbsp;<span style={{color: 'red'}}> Project</span></h3>
        <section className="slider">
          <FiArrowLeftCircle className='left-arrow' onClick={prevSlide} />
          <FiArrowRightCircle className="right-arrow" onClick={nextSlide}/>
          {SliderData.map((slide, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'} id="slideIm" key={index}>
              {index === current && ( <>
              <div className="display">
              <img src={slide.Image} alt="" srcset="" className="image" />
              <h3 className="projectName">{slide.Name}</h3>
              <AiOutlineCaretRight className="icon" /><p className="language">{slide.Language}</p>
              <GithubOutlined className="projectGithub" onClick={handleClick} />
              </div>
              </>
            )}
              </div>
            )
        })}
        </section>
    </div>

  )
}

export default Project