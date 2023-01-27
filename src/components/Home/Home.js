import React from "react";
import img from "../Images/insta.JPG";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <h2 className="text-7xl col-span-2">
          <span>Insta360 GO 2</span>
          <span className="flex">The tiny mighty action cam</span>
        </h2>
        <img className="col-span-1" src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
