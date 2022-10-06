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

function Write() {
  const [blogData, setBlogData] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(blogData);
    setBlogData();
  };

  //User should add a photo when they click on the add button, URL
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
              value={blogData}
              onChange={event => setBlogData(event.target.value)}
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
              value={blogData}
              onChange={event => setBlogData(event.target.value)}
            />
          </div>

          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              name= 'body'
              value={blogData}
              onChange={event => setBlogData(event.target.value)}
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
