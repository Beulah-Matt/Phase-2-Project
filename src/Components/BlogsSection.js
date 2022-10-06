import React, { useEffect, useState } from 'react'
import Titles from './Titles'
import { Swiper, SwiperSlide} from 'swiper/react';
import BlogItem from './BlogItem';
import styled from 'styled-components';
import SwiperCore, {Navigation} from 'swiper'
import 'swiper/swiper-bundle.min.css'
//import Write from './Write';

SwiperCore.use([Navigation])

const BlogSectionStyling = styled.div
`
padding: 10rem 0;
.allBlogPosts {
  display: flex;
  gap: 3rem;
  margin-top: 5rem;
}
.swiper-container {
  padding-top: 8rem;
  max-width: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  height: 50px;
  width: 50px;
  background: var(--deep-dark);
  z-index: 10;
  right: 60px;
  left: auto;
  top: 0;
  transform: translateY(50%);
  color: var(--gray-1);
  border-radius: 8px;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 2rem;
}
@media only screen and (max-width: 768px) {
  .allBlogPosts {
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    gap: 5rem;
    .projectItem__img {
      width: 100%;
    }
  }
}
`;

function BlogsSection() {
const [blogPosts, setBlogPosts]= useState([])

useEffect(()=>{
    fetch('http://localhost:3000/blogPosts')
    .then(res => res.json())
    .then(blogPost => setBlogPosts(blogPost))
}, [])
console.log(blogPosts);
 
  return (
    <BlogSectionStyling>
        <div className='Container'>
            <Titles title='Blogs' subtitle='Read my articles here' />
            <div className="allBlogPosts">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                        slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                        slidesPerView: 2,
                        },
                        // when window width is >= 1200px
                        1200: {
                        slidesPerView: 3,
                        },
                    }}
                >
                    {blogPosts.map((blogPost, index)=>{
                        if (index >= 5) return null;
                        return(
                            <SwiperSlide key={blogPost.id}>
                                <BlogItem blogPost = {blogPost} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>      
    </BlogSectionStyling>
  
  )
}

export default BlogsSection