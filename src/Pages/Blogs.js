import React from 'react'
import styled from 'styled-components'
import Titles from '../Components/Titles'
//import BlogsSection from '../Components/BlogsSection'

const BlogStyles = styled.div
`
padding: 10rem 0;

`;

export default function Blogs() {
  return (
    <BlogStyles>
      <div className="container">
        <Titles title='About Me' subtitle='Get to know me'/> 
      </div>
    </BlogStyles>
  )
}
