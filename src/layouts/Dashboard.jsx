import React from 'react'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import useCart from '../hooks/useCart'


const Dashboard = () => {
const [cart] = useCart()

  return (
    <div className='mx-16'>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <NavLink to="/dashboard/mycart">
                <FaShoppingCart></FaShoppingCart> My-Cart
                <span className="badge badge-warning">{cart?.length || 0}</span>
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dashboard/payment">
                {" "}
                <FaBars></FaBars> Manage Bookings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard