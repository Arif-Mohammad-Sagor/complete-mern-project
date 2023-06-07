import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProviders";

const AllUser = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      // console.log(res.data);
      return res.data;

    },
  });
  const handleDelete = (item) => {
      fetch(`http://localhost:5000/users/${item._id}`, {
          method:'DELETE',
      })
          .then(res => res.json())
          .then(data => {
              if (data.deletedCount > 0) {
                  refetch()
                   Swal.fire(
                     "Deleted!",
                     "Your user has been deleted.",
                     "success"
                   );
              }

      })
  };
  const handleAdminRole = (item) => {
    fetch(`http://localhost:5000/users/admin/${item._id}`, {
      method: "PATCH"
    })
        .then(res=>res.json())
        .then((data) => {
            if (data.modifiedCount > 0) {
                refetch();
                 Swal.fire(
                   `${item.name} has been added as a admin`
                 );
          }
      })
      .catch((err) => {console.log(err)});
  };
  const table_data = users.map((item, index) => (
    <tr key={item._id}>
      <td>
        <label>{index + 1}</label>
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        {item.role === "admin" ? (
          "admin"
        ) : (
          <button
            onClick={() => handleAdminRole(item)}
            className="btn bg-blue-600"
          >
            <FaUserShield></FaUserShield>
          </button>
        )}
      </td>
      <td>
        <button onClick={() => handleDelete(item)} className="btn bg-red-600">
          <FaTrash></FaTrash>
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <div className=" my-4">
        <p className="text-2xl text-center uppercase">
          Totol users you have: {users.length}
        </p>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Sl.</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {table_data}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
