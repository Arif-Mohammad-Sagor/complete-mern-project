import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../providers/AuthProviders'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats')
            return res.data
        }
    })
    console.log(data);


  return (
    <div>
      <h1 className="text-2xl font-semibold text-gradient-to-r-blue-500-yellow-500">
        Hi,Welcome Back {user.displayName}
      </h1>
      <div className="stats shadow my-8">
        <div className="stat place-items-center">
          <div className="stat-title">Revenue</div>
                  <div className="stat-value">$ { data?.revenue}</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Customer</div>
                  <div className="stat-value text-secondary">{data?.customers}</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Orders</div>
                  <div className="stat-value">{data?.carts}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Products</div>
                  <div className="stat-value">{data?.products}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome