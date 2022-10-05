import React from "react";
import styled from "styled-components";
import {MdAdd} from "react-icons/md"

const WriteStyles= styled.div
`
.write {
    padding-top: 50px;
  }
  .writeImg {
    margin-left: 150px;
    width: 70vw;
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
   .writeIcon {
    width: 25px;
    height: 25px;
    font-size: 20px;
    border: 1px solid;
    border-radius: 50%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
    width: 70vw;
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
    //User should add a photo when they click on the add button, URL
  return (
    <WriteStyles>
      <div className="write">
        <img
          className="writeImg"
          src="https://i.postimg.cc/htjKhmRT/marcel-strauss-fzqxo-FJyti-E-unsplash.jpg"
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <div className="writeIcon"><MdAdd /></div>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
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
