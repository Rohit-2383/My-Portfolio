
import React from 'react';
import {images} from '../../constants';
import {motion} from 'framer-motion';
import './Header.scss';

 const scaleVariants ={
    whileInView:{
      scale:[0,1],
      opacity:[0,1],
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
 }

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
    <motion.div
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:0.5}}
      className='app__header-info'
    >
      <div className="app__header-badge">
         <div className="badge-cmp app__flex">
           <span>👋</span>
           <div style={{marginLeft:20}}>
           <p>Hello I am</p>
           <h1 className="head-text">Rohit</h1>
           </div>
         </div>
         <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Student</p>
         </div>
      </div>
    </motion.div>
    <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:0.5,delayChildren:0.5}}
      className='app__header-img'
    >
      <img src={images.profile} alt="profile" />
      <motion.img
      whileInView={{scale:[0,1]}}
      transition={{duration:1,ease:'easeInOut'}}
      src={images.circle}
      alt='profile circle'
      className='overlay__circle'
      />
    </motion.div>
    <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
    >
      {
        [images.flutter,images.redux,images.sass].map((item,idx)=>(
          <div className="circle-cmp app__flex" key={`circle-${idx}`}>
            <img src={item} alt="circle" />
          </div>
        ))
      }
      
    </motion.div>
    </div>
  );
}

export default Header;