import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMG_HOSTING_API;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset,formState: { errors }, } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {

    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios.post(img_hosting_url, formData).then((response) => {
      
      if (response.status === 200) {
        const image = response.data.data.display_url;
        const { name, category, recipe, price } = data;
        const newItem = {
          name,
          recipe,
          price: parseFloat(price),
          category,
          image,
        };
        axiosSecure.post("/menu", newItem).then((data) => {
          if (data.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="What's New"
        subHeading="Add An Item"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="p-5 ">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Name </span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Recipe Name"
            className="input input-bordered w-full "
          />
          {errors.recipeName && <span>Recipe name is required</span>}
        </div>
        <div className="flex items-center my-4 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
            <select
              className="w-full input input-bordered"
              defaultValue="Choose One"
              {...register("category")}
            >
              <option value="Choose One" disabled>
                Choose one
              </option>
              <option value="Soup">Soup</option>
              <option value="Salad">Salad</option>
              <option value="Dessert">Dessert</option>
              <option value="Drink">Drink</option>
              <option value="Deesi">Deesi</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="price"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Recipe Details </span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            class="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>

        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input type="submit" className="btn btn-primary btn-xs mt-4" />
      </form>
    </div>
  );
};

export default AddItem;
