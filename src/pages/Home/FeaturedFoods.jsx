import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import Featured1 from '../../assets/home/featured.jpg'

const FeaturedFoods = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Featured1})` }}
    >
      <div className="absolute h-screen w-full bg-black top-0 bg-opacity-40 ">
        <div className=" text-white">
          <SectionTitle
            heading="Check it Out"
            subHeading="From Our Menu"
          ></SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 mt-4">
          <div className=" flex justify-center items-center">
            <img src={Featured1} className="w-[600px] h-[400px]" />
          </div>
          <div className="flex items-center justify-center text-white">
            <div>
              {" "}
              <p className='uppercase text-lg '>March 20,2023</p>
              <p className=' uppercase text-lg'>Where can get some ? </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn my-4 text-white btn-outline  border-b-4">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedFoods