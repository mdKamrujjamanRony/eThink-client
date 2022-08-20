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
    <div className="min-h-screen bg-yellow-100 py-12">
      <div className="text-center mx-24 my-12">
            <h1 class="text-5xl text-secondary font-bold mb-5">Featured Courses</h1>
            <p>
              Learning often happens in classrooms but it doesn't have to use Edu flow to facilitate learning experiences no matter
              the context
            </p>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-5 mx-12 lg:mx-24">
        {services
          .map((service) => (
            <Service key={service._id} service={service}></Service>
          ))
        }
      </div>
    </div>
  );
};

export default Services;
