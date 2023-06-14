
import React,{useEffect,useState} from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants';
import './About.scss';
import { AppWrapper } from '../../wrapper';

const abouts = [
  {role:'web Development',desc:'I am a good web developer',imgURL:images.about01},
  {role:'Frontend Development',desc:'I am good at frontend',imgURL:images.about02},
  {role:'Responsive Design',desc:'I am good at Responsive Design',imgURL:images.about03},
  {role:'React Framework',desc:'I am a good in React Framework',imgURL:images.about04},
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>I know that <span>Good Dev</span><br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
          {
            abouts.map((item,idx)=>(
              <motion.div
                whileInView={{opacity:1}}
                whileHover={{scale:1.1}}
                transition={{duration:0.5,type:'tween'}}
                className='app__profile-item'
                key={item.role+idx}
              >
                <img src={item.imgURL} alt={item.desc} />
                <h2 className="bold-text" style={{marginTop:20}}>{item.role}</h2>
                <p className="p-text" style={{marginTop:10}}>{item.desc}</p>

              </motion.div>

            ))
          }
      </div>
    </>
  );
}

export default AppWrapper(About,'about');