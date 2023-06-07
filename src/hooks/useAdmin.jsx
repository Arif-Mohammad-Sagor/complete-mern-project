
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
     enabled:!loading && !!user?.email && !!localStorage.getItem("access_token"),
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        //  console.log(res,'from useAdmin')
        return res.data.admin;
      }
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;

//       await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
//         headers: {
//           authorization: `bearer ${localStorage.getItem("access_token")} `,
//         },
//