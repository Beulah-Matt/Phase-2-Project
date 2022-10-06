import React, { useEffect, useState } from 'react'
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
@media only screen and (max-width: 768px) {
  .blogSearchBar,
  .blogSearchBar form,
  .blogSearchBar input {
    width: 100%;
  }
}
.allBlogs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5rem;
  margin-top: 5rem;
}
`;

export default function Blogs({blogPosts, setBlogPosts}) {
  // Loop through all blog items and display them here using the Blog item component
  //Add search functionality to this page

const [search, setSearch] = useState('');
//take in a function and a dependency
//The dependency is the blogposts, specifies when I want to  run the search
useEffect(()=>{
  if (search==='')return;
  setBlogPosts(()=>
  blogPosts.filter((blog)=>blog.title.toLowerCase().match(search.toLowerCase())))
},[search]);


const handleChange = (event)=>{
  event.preventDefault();
  setSearch(event.target.value)
  //Making sure you go to all blogs after search
  if (!event.target.value.length>0){
    setBlogPosts(blogPosts)
  }
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
        </div>
      </div>
    </BlogStyles>
  )
}
