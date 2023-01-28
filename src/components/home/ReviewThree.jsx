import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ReviewThree = () => {
  return (
    <div className="review-card">
      <img
        src="https://www.studiosami.com/wp-content/uploads/2018/05/Montclair-07042-Yearbook-Photography-002.jpg"
        alt=""
      />
      <p>Karen Davis</p>
      <p>"Not satisfied ... lol"</p>

      <div className="rating">
        <p>0</p>
        <FaThumbsUp className="thumb" size={25} />
        <FaThumbsDown className="thumb" size={25} />
        <p>95.5k</p>
      </div>
    </div>
  );
};

export default ReviewThree;
