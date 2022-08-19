import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-inherit">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2XuC84PnzKZCBm2jMZEJNt/e9500b82efeab7b286f2c37c61e16797/CourseraLearners_C_Composition_Hillary_copy.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40"
          class="max-w-sm"
          alt=""
        />
        <div className="px-24">
          <h1 class="text-6xl font-bold">Learn without limits</h1>
          <p class="py-6 text-lg">
          Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
          </p>
          <button class="btn btn-primary">Join for free</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
