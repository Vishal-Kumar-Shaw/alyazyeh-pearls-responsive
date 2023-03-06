import React from "react";
import img1 from "./Images/img8.jpg";
import img2 from "./Images/5.jpg";
import img3 from "./Images/6.jpg";
import img4 from "./Images/7.jpg";
import './FirstDiv.css';

const FirstDiv = () => {
  return (
    <div className="about-main-div">
      <div className="image-div">
        <div className="first-col">
          <img src={img1} alt="img" className="first-type"/>
          <img src={img2} alt="img" className="second-type"/>
        </div>
        <div className="second-col">
          <img src={img3} alt="img" className="second-type" />
          <img src={img4} alt="img" className="first-type"/>
        </div>
      </div>
      <div className="content-div">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
};

export default FirstDiv;
