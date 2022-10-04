import React from 'react'
import Button from './Button'
import DescriptionText from './DescriptionText'
import Titles from './Titles'
import aboutImg from '../Fonts-Images/images/aboutImg.jpg'
import styled from 'styled-components'

const AboutSectionStyles = styled.div
`
padding: 10rem 0;
.container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}
.aboutSection__left,
.aboutSection__right {
  flex: 1;
}
.section-title {
    text-align: left;
  }
.paragraph {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSecBtn{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection-left {
      flex: 4;
    }
    .aboutSection-right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection-left,
    .aboutSection-right {
      width: 100%;
    }
    .aboutSection-right {
      /* height: auto; */
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .paragraph {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSecBtn {
      flex-direction: column;
      gap: 0rem;
      .btn-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyles>
        <div className='container'>
            <div className="aboutSection-left">
                <Titles className='title' subtitle='Get to know me' title='About Me' />
                <DescriptionText >
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 Excepturi, doloribus inventore! Dolor doloribus consequuntur
                 maiores non sapiente est reprehenderit odio?
                </DescriptionText>
                <div className='aboutSecBtn'>
                <Button btnLink='/blogs' btnText="Articles"/>
                <Button btnLink='/about' btnText="...More" outline={true}/>
                </div>
            </div>
            <div className="aboutSection-right">
                <img src={aboutImg} alt='https://unsplash.com/photos/TgpWr5YI7Ls'/>
            </div>
        </div>
    </AboutSectionStyles>

  )
}

export default AboutSection