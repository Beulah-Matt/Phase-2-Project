import React, { useState } from "react";
import styled from "styled-components";
const WriteStyles = styled.div`
.write {
    padding-top: 50px;
  }
  .writeImg {
    margin-left: 150px;
    width: 68.7vw;
    height: 280px;
    border-radius: 10px;
    object-fit: cover;
  }
  .writeForm {
    position: relative;
  }
  .writeFormGroup {
    margin-left: 150px;
    display: flex;
    align-items: center;
  }
  .customUrl {
    position: absolute;
    top: -30px;
    right: 50px;
    color: black;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .writeInput {
    background-color: rgb(208, 201, 201);
    font-size: 30px;
    padding: 20px;
    width: 68.7vw;
  }
  .writeInput::placeholder {
    color: black;
    font-weight: 400;
  }
  .writeInput:focus {
    outline-style: none;
  }
  .writeText {
    width: 68.7vw;
    height: 100vh;
    font-family: communist;
    font-size: 20px;
  }
  .writeSubmit {
    position: absolute;
    top: 20px;
    right: 50px;
    color: black;
    background-color: aqua;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
  
`;

function Write({blogPosts, setBlogPosts}) {
  
const [blogInfo, setBlogInfo]= useState({
  title: '',
  body: '',
  image:''
})
const handleChange = (e)=>{
  setBlogInfo({...blogInfo, [e.target.name]: e.target.value})
}

const handleSubmit =(e)=>{
  e.preventDefault();
  fetch(' https://phase-2-project-backend-beulah.herokuapp.com/blogPosts', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogInfo),
  })
  .then(resp=> resp.json())
  .then((data)=>{
    const newBlog = [...blogPosts, data]
    setBlogPosts(newBlog)
  })
  e.target.reset()
}
//Get previous value of blogs, then spread the previous value of blogs
//Put new blog 
  return (
    <WriteStyles>
      <div className="write">
        <img
          className="writeImg"
          src="https://i.postimg.cc/htjKhmRT/marcel-strauss-fzqxo-FJyti-E-unsplash.jpg"
          alt=""
        />
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              name= 'title'
              //ref= {title}
              onChange={handleChange}
              
            />
          </div>
          <div className="writeFormGroup">
            <input
              className="customUrl"
              placeholder="Custom image URL"
              type="text"
              required="required"
              autoFocus={true}
              name= 'image'
              //ref={imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              name= 'body'
              //ref={story}
              onChange={handleChange}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </WriteStyles>
  );
}

export default Write;
