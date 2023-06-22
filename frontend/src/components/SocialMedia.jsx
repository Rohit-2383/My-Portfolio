
import React from 'react';
import {BsLinkedin} from  'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/rohit-rai-265396242" target="_blank" rel="noreferrer">
            <BsLinkedin/>
            </a>
        </div>
        <div>
          <a href="https://github.com/Rohit-2383" target="_blank" rel="noreferrer">
          <AiFillGithub/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia;