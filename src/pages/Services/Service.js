import React from "react";

const Service = ({ service }) => {
  const { _id, img, name, title, avatar, ratting, price, view, video } =
    service;
  return (
    <>
      <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
        <figure class="px-5 pt-5">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>

        <div className="grid grid-cols-3 mt-2">
          <div className="flex  justify-center">
            <img
              src="http://skilify.theuxuidesigner.com/images/svg/star.svg"
              alt=""
            />
            <span>{ratting}</span>
          </div>
          <div className="flex justify-center">
            <img
              src="http://skilify.theuxuidesigner.com/images/svg/crd-play.svg"
              alt=""
            />
            <span>{video}</span>
          </div>
          <div className="flex justify-center">
            <img
              src="http://skilify.theuxuidesigner.com/images/svg/crd-view.svg"
              alt=""
            />
            <span>{view}</span>
          </div>
        </div>
        <div class="divider mx-10 my-0"></div>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div class="avatar">
                <div class="w-12 rounded-xl mr-2">
                  <img src={avatar} alt='' />
                </div>
              </div>
              <span>{name}</span>
            </div>
            <span className="text-xl text-orange-400 font-bold">${price}</span>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-primary btn-outline btn-wide mt-5">Enroll Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
