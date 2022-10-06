import React from 'react'
import styled from 'styled-components'
import DescriptionText from '../Components/DescriptionText';


const AboutStyling= styled.div
`
padding: 20rem 0 10rem 0;
.top-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.leftSide {
  flex: 3;
}
.rightSide {
  flex: 2;
}
.aboutSubtitle {
  font-size: 2.2rem;
  margin-bottom: 2rem;
}
.aboutInfo {
  margin-bottom: 4rem;
  .paragraph {
    max-width: 100%;
  }
}
.aboutTitle {
  font-size: 3.6rem;
  margin-bottom: 3rem;
}
.rightSide {
  img {
    border: 2px solid var(--gray-1);
  }
}
@media only screen and (max-width: 768px) {
  padding: 10rem 0;
  .top-section {
    flex-direction: column;
    gap: 5rem;
  }
  .aboutSubtitle {
    font-size: 1.8rem;
  }
  .aboutTitle {
    font-size: 2.8rem;
  }
}
`;

export default function About() {
  return (
    <AboutStyling>
      <div className="container">
        <div className="top-section">
          <div className="leftSide">
            <p className="aboutSubtitle">
              Howdy, I am London
            </p>
            <h2 className="aboutTitle">
              A lowkey mental health blogger
            </h2>
            <div className="aboutInfo">
              <DescriptionText className='paragraph'>
              A remarkable About page is genuine, approachable, and distinguished. 
              I hope to give you, the visitor a glimpse into what walking with me 
              on this mental health journey might be like. 
              <br/> <br/>
              My interests include wholistic living, telling stories that convey the 
              unique nature of every human and being around nature, forests specifically.
              <br/> <br/>
              Since Mental health issues are very unique and personal to every individual, 
              there are several ways to convey our experiences, however, the  is generally
               one thing that is the same-the people. So, let's create a safe space on this
               blog a story at a time.
              </DescriptionText>
            </div>
          </div>
          <div className="rightSide">
            <img src="https://i.postimg.cc/J4R4bJ1z/annie-nyle-XFGVc-AHf5-O0-unsplash.jpg" alt="about pic" />
          </div>
        </div>
      </div>
       
    </AboutStyling>
  )
}
