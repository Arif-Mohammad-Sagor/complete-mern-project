import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000/",
  });

  useEffect(() => {

  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
}, [logOut, navigate, axiosSecure]);

    // useEffect(() => {
    //   // Add a request interceptor
    //   axiosSecure.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem("access_token");
    //     if (token) {
    //       config.headers.authorization = `bearer ${token}`;
    //     }
    //     // Do something before request is sent
    //     return config;
    //   });
    //   axiosSecure.interceptors.response.use(function (response) {
    //     // Any status code that lie within the range of 2xx cause this function to trigger
    //     response,
    //       async (error) => {
    //         if (
    //           error.response &&
    //           (error.response.status === 401 || error.response.status === 403)
    //         ) {
    //           await logOut();
    //           navigate("/login");
    //         }
    //         return Promise.reject(error);
    //       };

    //   });
    // }, [navigate, logOut, axiosSecure])

    return [axiosSecure];
}

export default useAxiosSecure