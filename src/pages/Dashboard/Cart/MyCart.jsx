import React from 'react'
import useCart from '../../../hooks/useCart'
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {

  const [cart,refetch] = useCart();

  const myCart = cart?.data

  const total = myCart?.reduce((sum, item) => item.price + sum, 0);
   const price = parseFloat(total?.toFixed(2));

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
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
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      });
  };
  const table_data = myCart?.map((item, index) => (
    <tr key={item._id}>
      <td>
        <label>{index + 1}</label>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <button
          onClick={() => handleDelete(item._id)}
          className="btn bg-red-600"
        >
          <FaTrash></FaTrash>
        </button>
      </td>
    </tr>
  ));


  return (
    <div>
      <div>
        <div className="flex items-center justify-around bg-slate-200 w-full">
          <p className="text-3xl ">Total Items : {myCart?.length}</p>
          <p className="text-3xl ">Total Price: $ {price}</p>
          <Link to="/dashboard/payment">
            <button className="btn btn-primary text-xl ">Pay</button>
          </Link>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>Sl.</label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
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
    </div>
  );
}

export default MyCart