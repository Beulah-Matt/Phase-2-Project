import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import BlogsSection from '../Components/BlogsSection'


export default function Home({blogPosts}) {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <BlogsSection blogPosts={blogPosts}/>
    </div>
  )
}
