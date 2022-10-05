import React, { useEffect, useState } from 'react'
import Titles from './Titles'
import { Swiper, SwiperSlide} from 'swiper/react';
import BlogItem from './BlogItem';
import styled from 'styled-components';
import SwiperCore, {Navigation} from 'swiper'
import 'swiper/swiper-bundle.min.css'

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
 //In my return statement, I only want to showcase 5 blog posts on the landing page    
    // const blogPosts= [
    //     {
    //         "id":1,
    //         "title":"Welcome to the new blog",
    //         "body":"Mental Health issues are increasingly a part of our modern society. Mental health is affected by a wide variety of internal and external factors, as well as how our brain is “wired”. Too much stress and too much anxiety (unfortunately all too common these days) can ultimately lead to mental health conditions which can interfere with our capacity to lead life the way we would like. The levels of stress and anxiety within is as individuals can fluctuate wildly in response to the news and current events, challenges in earning a living, challenges in our social and work relationships, and so on, can seriously impact our behavioral health",
    //         "image":"https://i.postimg.cc/wxRnd9GX/kitchen1.jpg"
    //     },
    //     {
    //         "id":2,
    //         "title":"Know your stressors",
    //         "body":"In response to increasing mental health awareness, some of us are managing to reduce our levels of stress by working at home more; others are finding working at home more a source of stress in itself, because of social isolated, or a noisy environment that is not conducive to being productive. If we are not careful, our ways of trying to handle stress can simply serve to bring us other types of stress.",
    //         "image":"https://i.postimg.cc/0N4mbH07/image2.jpg"
    //     },
    //     {
    //         "id":3,
    //         "title":"How to get help",
    //         "body":"People often don’t get the mental health help they need because they don’t know where to start. Use these resources to find the help you, your friends, or family need.",
    //         "image":"https://i.postimg.cc/3N5vZ46R/image3.jpg"
    //     },
    //     {
    //         "id":4,
    //         "title":"This is the end of the world",
    //         "body":"1 in 5 Americans will experience a mental illness in a given year.1 in 5 children, either currently or at some point during their life, have had a seriously debilitating mental illness.1 in 25 Americans lives with a serious mental illness, such as schizophrenia, bipolar disorder, or major depression.",
    //         "image":"https://i.postimg.cc/Z5T6gNqv/image4.jpg"
    //     }
    // ]  

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
                                {/* <BlogItem  title= {blogPost.title} body= {blogPost.body} image={blogPost.image}/> */}
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