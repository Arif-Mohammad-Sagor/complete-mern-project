import React, { useContext, useEffect, useState } from "react";
import auth1 from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const user = res.user;
                setSuccess("Successfully loggedIn")
                setError('')
             navigate(from,{replace:true})
                console.log(user)
            })
            .catch(err => {
                setError(err.message);
                setSuccess('');
        })

    }
  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

    const handleValidateCaptcha = (e) => {

    const captchValue = e.target.value;

    if (validateCaptcha(captchValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="px-16">
      <div className="hero min-h-screen bg-base-100">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 p-8">
            <img src={auth1} className="w-full  aspect-square" />
          </div>
          <div className="  w-1/2 flex min-h-screen items-center  bg-base-100">
            <form
              onSubmit={handleLogin}
              className="card-body w-4/5   px-16 py-12 shadow-lg"
            >
              <p className="text-3xl text-center font-bold">Login Please</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="label-text-alt text-end link link-hover">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  onBlur={handleValidateCaptcha}
                  type="cahtcha"
                  placeholder="Write the above Text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={disabled}
                  className="btn btn-primary"
                >
                  Login
                </button>
                <p>
                                  Don't have any account <Link className="text-blue-600 underline" to="/signup">Signup</Link>
                </p>
              </div>
              <p className="text-red-600">{error}</p>
              <p className="text-green-600">{success}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
