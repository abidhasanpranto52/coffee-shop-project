/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiFillDelete, AiFillEdit, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDelete }) => {
  const { _id, name, price, supplier, taste, category, details, photo } =
    coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full mt-8 pr-4">
        <div>
          <p className="card-title">
            <span className="font-bold">Name:</span>
            {name} Coffee
          </p>
          <p>
            <span className="font-bold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-bold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical">
            <button className="btn btn-primary btn-sm btn-outline mb-2 btn-circle">
              <AiOutlineEye className="text-2xl" />
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn bg-[#3C393B] btn-sm btn-outline mb-2 btn-circle">
                <AiFillEdit className="text-2xl text-white" />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-700 btn-sm btn-outline mb-2 btn-circle "
            >
              <AiFillDelete className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
