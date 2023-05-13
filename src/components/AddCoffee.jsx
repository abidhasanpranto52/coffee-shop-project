import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,price,supplier,taste,category,details,photo};
        console.log(newCoffee);


        /// send data to server
        fetch('http://localhost:5500/coffee', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
         body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: 'Success!',
              text: 'Added Successfully',
              icon: 'success',
              confirmButtonText: 'Okay'
            })
          }
        })

    }

  return (
    <div className="text-center bg-[#F4F3F0] p-20">
      <h1 className="font-rancho text-3xl font-bold mb-3">Add New Coffee</h1>
      <p>
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at <br /> its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed <br /> to using Content here.
      </p>
      <form onSubmit={handleAddCoffee}>
        {/* name & price row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-semibold "> Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-semibold ">price</span>
            </label>
            <label className="input-group ">
              <input
                type="number"
                name="price"
                placeholder="Enter Coffee price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* supplier & taste row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-semibold ">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Enter Coffee Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-semibold ">Taste</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="taste"
                placeholder="Enter Coffee Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Category & Details row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-semibold "> Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter Coffee Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-semibold ">Details</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="details"
                placeholder="Enter Coffee Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Photo row */}
        <div className="mb-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text  font-semibold "> Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo Url"
                className="input input-bordered w-full "
              />
            </label>
          </div>
         
        </div>
        

        
        <input type="submit" value="add Coffe" className="btn text-black font-bold btn-block bg-[#D2B48C]" />
      </form>
    </div>
  );
};

export default AddCoffee;
