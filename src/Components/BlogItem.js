import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const BlogItemStyling = styled.div
`
.blogItem-img {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  display: inline-block;
  border: 3px solid var(--gray-2);
  img {
    height: 100%;
  }
}
.blogItem-info {
  margin-top: 1rem;
  background-color: var(--deep-dark);
  padding: 1rem;
  border-radius: 12px;
}
.blogItem-title {
  font-size: 2.2rem;
}
.blogItem-desc {
  font-size: 1.6rem;
  font-family: 'RobotoMono Regular';
  margin-top: 1rem;
}
@media only screen and (max-width: 768px) {
  .blogItem-img {
    height: 350px;
  }
}
`;

function BlogItem({blogPost}) {
  return (
    <BlogItemStyling>
      <Link to="/blogs" className='blogItem-img'>
        <img src={blogPost.image} alt="blog pic" />
      </Link>
      <div className="blogItem-info">
        <Link to='#'>
          <h3 className='blogItem-title'>{blogPost.title}</h3>
        </Link>
        <p className='blogItem-desc'>{blogPost.body}</p>
      </div>
    </BlogItemStyling>
  )
}

export default BlogItem