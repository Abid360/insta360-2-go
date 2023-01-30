import React from "react";
import CustomHook from "../CustomHook/CustomHook";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  const [reviews, setReview] = CustomHook();
  return (
    <div className="grid grid-cols-3 gap-5 mx-6">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review}></ReviewItem>
      ))}
    </div>
  );
};

export default Reviews;
