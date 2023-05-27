import React, { useContext, useState } from 'react'
import auth2 from '../../assets/others/authentication2.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProviders';
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) => {
console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        updateUserProfile(data.name,data.photo)
          .then()
        .catch()
        console.log(result)
Swal.fire({
  icon: "success",
  title: "Successfully user created",
  text: "Cool",

});
        navigate("/");

      })
      .catch(error => {
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `${error.message}`,

});
    })
  };


  return (
    <div className="px-16">
      <div className="hero min-h-screen bg-base-100">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 p-8">
            <img src={auth2} className="w-full  aspect-square" />
          </div>
          <div className="  w-1/2 flex min-h-screen items-center  bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-4/5 px-16 py-12 shadow-lg"
            >
              <p className="text-3xl text-center font-bold">Sign-Up Please</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo-URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="Photo-url"
                  className="input input-bordered"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.photo && (
                <span className="text-red-600">This field is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    pattern:
                     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  className="input input-bordered"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password should be minimum 6 charecters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">
                  {" "}
                  Password should be less than 21 charecters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  {" "}
                  Password should contain at least one uppercase,one
                  lowercase,one digit and one special charecter
                </span>
              )}
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p>
                Already have an account{" "}
                <Link className="text-blue-600 underline" to="/login">
                  Login
                </Link>
              </p>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp