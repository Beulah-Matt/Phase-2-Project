import React from 'react'
import styled from 'styled-components'
import HeroPhoto from '../Fonts-Images/images/HeroPhoto.png'
import Button from './Button'
import DescriptionText from './DescriptionText'

const HeroSecStyle = styled.div 
`
.hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
}
.hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__title {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
.h__image{
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1); 
}
.blogInfo{
    color: black;
    margin-top: -15rem; 
    font-family: 'MontserratBold';
    
}

@media only screen and (max-width: 768px) {
    .h__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .h__title {
        font-size: 4.5rem;
      }
    }
    .h__image {
      height: 300px;
    }
    .blogInfo {
      margin-top: 3rem;
    }
  }
`;

function HeroSection() {
  return (
    <HeroSecStyle>
        <div className='hero'>
        <div className="container">
             <h1 className="hero__heading">
                <span>Hi, Welcome to</span>
                <span className='hero__title'> Mentality</span>
             </h1>
             <div className="h__image">
                <img src={HeroPhoto} alt='mental health' />
             </div>
            <div className="blogInfo">
                <DescriptionText > 
                The best part about starting this blog was being able 
                to learn more about myself and develop my understanding of the
                human nature as I’ve moved along.
                </DescriptionText>
                <Button btnLink= '/blogs' btnText= 'Read My Blogs' outline= {false}/>
            </div>

        </div>
        </div>

    </HeroSecStyle>
  )
}

export default HeroSection