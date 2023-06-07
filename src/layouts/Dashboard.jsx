import React, { useContext, useEffect, useState } from 'react'
import { FaBars,FaWallet, FaMailBulk, FaUsers,FaShoppingCart,FaHome, FaCalendar, FaStarHalfAlt, FaCalendarCheck, FaBook, FaUtensils } from 'react-icons/fa'
import {  NavLink, Outlet } from 'react-router-dom'
import useCart from '../hooks/useCart'
import useAdmin from '../hooks/useAdmin'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProviders'


const Dashboard = () => {

  const [cart] = useCart();

  const [isAdmin] = useAdmin();
  // console.log(isAdmin);


  return (
    <div className="mx-16">
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
            {isAdmin ? (
              <>
                {" "}
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome>Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart> My-cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/additem">
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaBars></FaBars> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/bookings">
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink to="/dashboard/userhome">
                    {" "}
                    <FaHome></FaHome> User
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    {" "}
                   <FaShoppingCart></FaShoppingCart> User Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reservation">
                    {" "}
                    <FaCalendar></FaCalendar>Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/payment">
                    {" "}
                    <FaWallet></FaWallet>Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/review">
                    {" "}
                    <FaStarHalfAlt></FaStarHalfAlt> Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bookings">
                    <FaCalendarCheck></FaCalendarCheck> My Bookings
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                {" "}
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                {" "}
                <FaBars></FaBars> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                {" "}
                <FaShoppingCart></FaShoppingCart>Shop{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                {" "}
                <FaMailBulk></FaMailBulk>Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard