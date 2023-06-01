import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user,loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  // Here we using reactQuery for fetching data and managing state.
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      // console.log( "res from axios", res.data);
      return res.data;
    }
    // queryFn: async () => {
    //   const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
    //     headers: {
    //       authorization:`bearer ${localStorage.getItem('access_token')}`
    //     }

    //   })
    //   const data = await res.json()
    //   console.log(data.data);
    //   return data.data;
    // },
  });
  return [cart, refetch];
};
export default useCart;

// && !!user?.email && !!localStorage.getItem("access_token")