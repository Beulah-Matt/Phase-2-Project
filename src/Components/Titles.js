import React from 'react'
import styled from 'styled-components'

const TitlesStyle= styled.div
`
    text-align: center;
    p {
      font-family: 'RobotoMono Regular';
      font-size: 2rem;
    }
    h2 {
      font-family: 'Montserrat Bold';
      font-size: 6rem;
      margin-top: 0.5rem;
      text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
      text-align: center;
      p {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 3.6rem;
      }
    }
  }
`;
//destructuring the heading and subheading and using default values
function Titles({subtitle = 'short intro', title= 'A Title'}) {
  return (
    <TitlesStyle className='section-title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </TitlesStyle>
  )
}

export default Titles