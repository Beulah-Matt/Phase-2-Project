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
.right {
  flex: 2;
}
`;

export default function About() {
  return (
    <AboutStyling>
      <div className="container">
        <div className="top-section">
          <div className="leftSide">
            <p className="aboutSubtitle">
              Is this working?
            </p>
            <h2 className="aboutTitle">
              It would be nice
            </h2>
            <div className="aboutInfo">
              <DescriptionText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea 
                necessitatibus nemo, nobis dignissimos animi.
                <br/> <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum 
                explicabo laboriosam nostrum nihil, vel dolor!
                <br/> <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur 
                debitis, dolorem reprehenderit impedit quidem praesentium.
                <br/> <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias et 
                obcaecati, omnis beatae commodi minima ipsum, error voluptatum atque 
                soluta sed necessitatibus eveniet? Excepturi hic, inventore rem iste dolores ab?
              </DescriptionText>
            </div>
          </div>
        </div>
      </div>
       
    </AboutStyling>
  )
}
