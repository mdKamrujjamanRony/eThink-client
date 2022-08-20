import React, { useEffect, useState } from "react";
import Service from "../Services/Service";
import Banner from "./Banner";
import Collaborate from "./Collaborate";
import Explore from "./Explore";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner />
      <Collaborate />
      <Explore />
      <div className="min-h-screen bg-base-200 py-12">
        <div class=" mx-24 pt-12">
          <div class="flex justify-between items-center flex-col md:flex-row">
            <div>
              <h1 class="text-5xl font-bold">Featured Courses</h1>
              <p>
                Learning often happens in classrooms but it doesn't have to.{" "}
                <br /> Use Edu flow to facilitate learning experiences no matter
                the context
              </p>
            </div>
            <div>
              <Link to='/services' className="btn btn-outline btn-primary">Browse Course</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-5 mx-12 lg:mx-24">
          {services
            .map((service) => (
              <Service key={service._id} service={service}></Service>
            ))
            .slice(0,3)}
        </div>
      </div>
    </div>
  );
};

export default Home;
