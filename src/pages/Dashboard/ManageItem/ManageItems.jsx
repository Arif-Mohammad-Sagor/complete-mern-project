import React from 'react'
import useMenu from '../../../hooks/useMenu'
import { FaPen, FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (item) => {

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
             axiosSecure.delete(`/menu/item/${item._id}`)
                 .then(res => {
                     console.log(res.data);
                     if (res.data.deletedCount > 0) {
                         refetch()
                           Swal.fire(
                             "Deleted!",
                             "Your file has been deleted.",
                             "success"
                           );
                 }
             })
         }
       });

    }

  const table_data = menu.map((item, index) => (
    <tr key={item._id}>
      <td>
        <label>{index + 1}</label>
      </td>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-xl">
            <img src={item.image} />
          </div>
        </div>
      </td>
      <td>${item.price}</td>
      <td>
        <button
          onClick={() => handleItemEdit(item)}
          className="btn bg-blue-600"
        >
          <FaPen></FaPen>
        </button>
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
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>#</label>
            </th>
            <th>Image</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {table_data}
        </tbody>
      </table>
    </div>
  );
}

export default ManageItems