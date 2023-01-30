import React from "react";
import { Link } from "react-router-dom";
import img from "../Images/insta.JPG";
import CustomHook from "../CustomHook/CustomHook";
import ReviewItem from "../Reviews/ReviewItem";

const Home = () => {
  const [reviews, setReview] = CustomHook();
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-10 my-10 mx-10 font-serif font-extrabold">
        <div className="text-7xl col-span-2">
          <h2>
            <span className="text-blue-700">Insta360 GO 2</span>
            <span className="flex">The tiny mighty action cam</span>
          </h2>
          <p className="text-xl mt-12 font-extralight">
            Insta360 GO 2 is the world's smallest action camera. It weighs about
            6x lighter than your old action cam, with the same sized image
            sensor, and fits perfectly on your shirt.Move the camera alllll
            you'd like. GO 2's horizon leveling algorithms will keep the video
            upright no matter what.
          </p>
        </div>
        <img className="col-span-1 w-80" src={img} alt="" />
      </div>
      <>
        <div className="my-12">
          <h2 className="text-5xl font-bold mb-10">Customer Reviews (3)</h2>
          <div className="grid grid-cols-3 mx-15 gap-5">
            {reviews.slice(0, 3).map((review) => (
              <ReviewItem key={review.id} review={review}></ReviewItem>
            ))}
          </div>
          <div className="my-20 text-center text-3lx">
            <Link
              className="rounded-full h-14 bg-gradient-to-r from-cyan-500 bg-gradient-to-r to-blue-500 hover:from-pink-500 hover:to-yellow-500 m-3 p-3 "
              to="/reviews"
            >
              See All Reviews
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
