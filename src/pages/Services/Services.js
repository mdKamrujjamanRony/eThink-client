import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
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
            <button class="btn btn-outline btn-primary">Browse Course</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-5 mx-12 lg:mx-24">
        {services
          .map((service) => (
            <Service key={service._id} service={service}></Service>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Services;
