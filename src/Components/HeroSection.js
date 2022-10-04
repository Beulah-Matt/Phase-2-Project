import React from 'react'
import HeroPhoto from '../Fonts-Images/images/HeroPhoto.png'
import Button from './Button'
import DescriptionText from './DescriptionText'

function HeroSection() {
  return (
    <div>
        <div className="container">
             <h1 className="h-section-heading">
                <span>Hi, Welcome to</span>
                <span>Mentality</span>
             </h1>
             <div className="hero_image">
                <img src={HeroPhoto} alt='mental health' />
             </div>
            <div className="blogInfo">
                <DescriptionText> 
                The best part about starting this blog was being able 
                to learn a new skill and develop my writing as I’ve moved along.
                </DescriptionText>
                <Button outline= {false} btnLink= '/blogs' btnText= 'Read My Blogs'/>
            </div>

        </div>
    </div>
  )
}

export default HeroSection