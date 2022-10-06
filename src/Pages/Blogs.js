import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components'
 import BlogItem from '../Components/BlogItem';
import Titles from '../Components/Titles'
// import BlogsSection from '../Components/BlogsSection'

const BlogStyles = styled.div
`
padding: 10rem 0;
.blogSearchBar {
  position: relative;
  width: 300px;
  margin-top: 5rem;
}
.blogSearchBar input {
  width: 100%;
  font-size: 2rem;
  padding: 0.8rem;
  color: var(--black);
  border-radius: 6px;
  outline: none;
  border: none;
}
.blogSearchBar .searchIcon {
  position: absolute;
  width: 2rem;
  right: 1rem;
}
.blogSearchBar .searchIcon path {
  color: #7393B3 ;
}

`;

export default function Blogs({blogPosts}) {
  // Loop through all blog items and display them here using the Blog item component
  //Add search functionality to this page

const [search, setSearch] = useState('');

const handleChange = (event)=>{
  event.preventDefault();
  setSearch(event.target.value)
}

  return (
    <BlogStyles>
      <div className="container">
        <Titles title='Articles' subtitle='Enjoy reading this'/> 
        <div className="blogSearchBar">
          <form>
            <input type="text" 
            value={search}
            onChange={handleChange}
            placeholder='article title'
            />
            <MdSearch className='searchIcon'/>
          </form>
        </div>
        <div className="allBlogs">
          {blogPosts.map((blogPost)=> {
            return <BlogItem blogPost={blogPost}/>
          })}
          
          {/* <BlogsSection /> */}
        </div>
      </div>
    </BlogStyles>
  )
}
