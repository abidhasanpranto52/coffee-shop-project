import "./App.css";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import { useState } from "react";

import Swal from "sweetalert2";

const App = () => {
  const allcoffees = useLoaderData();

  const [coffees, setCoffees] = useState(allcoffees);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5500/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = coffees.filter((item) => item._id != _id);
              setCoffees(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="my-10 container mx-auto">
      <div className="text-center mb-5">
        <h2 className="mb-4 text-4xl">Our Popular Products</h2>
        <Link to={'/addcoffee'}>
          <button className="btn btn-info">Add Coffee</button>
        </Link>
      </div>
      <div className="grid rounded-lg bg-slate-100 md:grid-cols-2 gap-4 p-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};
export default App;
