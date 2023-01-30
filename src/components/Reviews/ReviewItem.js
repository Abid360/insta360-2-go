import React from "react";

const ReviewItem = (props) => {
  const { id, name, text, rating } = props.review;
  return (
    <div className="bg-cyan-200 shadow-3xl flex">
      <div className="my-5 mx-12 ">
        <h1 className="text3xl">Name: {name}</h1>
        <h2>{text}</h2>
        <h3>Rating: {rating}</h3>
      </div>
    </div>
  );
};

export default ReviewItem;
