import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useContext(AuthContext);
  const handleSocialLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
          console.log(saveUser);
        axios.post(`http://localhost:5000/users`, {saveUser
        })
          .then(response => {
            console.log(response);
            navigate(from ,{replace:true})
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center">
        <span className="my-4 text-semibold"> Or login with google</span>
        <br />
        <button
          onClick={handleSocialLogin}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
