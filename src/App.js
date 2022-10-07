

import React,{ useEffect, useState}from "react";
import NavBarMenu from "./Components/NavBarMenu"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Write from "./Components/Write";

function App() {

  const [blogPosts, setBlogPosts]= useState([])

  useEffect(()=>{
      fetch('http://localhost:3000/blogPosts')
      .then(res => res.json())
      .then(blogPost => setBlogPosts(blogPost))
  }, []) 

  return (
    <>
    <Router>
       <NavBarMenu /> 
       <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/blogs'>
          <Blogs blogPosts={blogPosts} setBlogPosts= {setBlogPosts}/>
        </Route>
        <Route path='/write'>
          <Write blogPosts={blogPosts} setBlogPosts= {setBlogPosts}/>
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Home blogPosts={blogPosts} />
        </Route>
       </Switch>     
    </Router>
    
    </>
  );
}

export default App
