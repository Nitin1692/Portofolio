import React, { useEffect } from 'react'
import '../styles/preloader.css'
import { preLoaderAnim } from '../animation'

function Loader() {
    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
    <div className="preloader">
        <div className="texts-container">
            <span style={{color: 'red'}}>N<span style={{color: 'white'}}>itin Jain.</span></span>
        </div>
    </div>
  )
}

export default Loader;