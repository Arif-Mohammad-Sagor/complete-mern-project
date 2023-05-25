import React from 'react'

import servePicture from '../../assets/home/chef-service.jpg';

const Featured = () => {
  return (
    <div className="px-16 mt-32 ">
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${servePicture})` }}
      >
        <div className="w-3/5 h-2/5 mx-auto absolute top-32 left-52 bg-white flex justify-center items-center">
          <div>
            <p className="uppercase text-2xl mb-2 text-center">BrisTo boss</p>
            <p className='px-12'>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi cumque ad similique voluptatibus dolor alias, autem
              enim, reiciendis omnis necessitatibus vel dignissimos esse nisi
              magnam nostrum dolores perferendis qui beatae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured