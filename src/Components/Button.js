import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .btn {
    font-size: 2.2rem;
    background-color: ${(props) =>
        props.outline ? 'transparent' : 'var(--gray-1)'};
      border: 2px solid var(--gray-1); 
      padding: 0.7em 2em;
      border-radius: 8px;
      display: inline-block;
      color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
    }
    @media only screen and (max-width: 768px) {
        .btn {
          font-size: 1.8rem;
        }
      }
  `;


function Button({btnLink, btnText, outline}) {
  return (
    <ButtonStyle outline={outline} className = 'btn-wrapper'>
        <Link className='btn' to={btnLink}>
            {btnText}
        </Link>
    </ButtonStyle>
    
  )
}

export default Button