import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';


const useMenu = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: menu = [],isLoading,refetch} = useQuery({
    queryKey: ["menu" ],
    queryFn: async () => {
      const res = await axiosSecure("/menu")
      console.log(res.data);
      return res.data;


    },
  });
    return [menu, isLoading,refetch];
}

export default useMenu