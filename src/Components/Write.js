import React from "react";
import {MdAdd} from "react-icons/md"


function Write() {
    //User should add a photo when they click on the add button, URL encouraged
  return (
    <>
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
    </>
  );
}

export default Write;
