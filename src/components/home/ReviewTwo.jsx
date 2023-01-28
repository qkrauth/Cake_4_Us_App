import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ReviewTwo = () => {
  return (
    <div className="review-card">
      <img
        src="https://www.studiosami.com/wp-content/uploads/2018/05/Yearbook-Photographer-Montclair-07042.jpg"
        alt=""
      />
      <p>Blair Rodgers</p>
      <p>"Would recommend to anyone!"</p>

      <div className="rating">
        <p>35.0k</p>
        <FaThumbsUp className="thumb" size={25} />
        <FaThumbsDown className="thumb" size={25} />
        <p>0</p>
      </div>
    </div>
  );
};

export default ReviewTwo;
