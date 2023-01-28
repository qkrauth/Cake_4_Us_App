import React from "react";
import {FaThumbsUp, FaThumbsDown} from "react-icons/fa";

const ReviewOne = () => {
  return (
    <div className="review-card">
      <img
        src="https://www.gannett-cdn.com/authoring/2019/05/23/NTFO/ghows-NC-89926eda-e06c-637a-e053-0100007ff849-9ba9ed42.jpeg"
        alt=""
      />
      <p>Jordan Michaels</p>
      <p>"Very nice! Love the chocolate!"</p>

      <div className="rating">
        <p>50.5k</p>
        <FaThumbsUp className="thumb" size={25}/>
        <FaThumbsDown className="thumb" size={25}/>
        <p>0</p>
      </div>
    </div>
  );
};

export default ReviewOne;
