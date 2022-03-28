import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className='relative hover:opacity-80 shadow-md transition-all cursor-pointer p-4 bg-blue-200/10 backdrop-blur-lg'>

    <div className=" w-full h-5/6 bg-cover bg-center">
      <img className='bg-cover bg-center' src={image} alt={title}/>
            <h1 className={`absolute left-2/4 top-1/2 translate uppercase -translate-x-1/2 -translate-y-1/2 text-2xl text-white`}>{title}</h1>
    </div>

    <div className='m-2 lg:m-4'>
            <h1 className='uppercase text-white font-bold'>{description}</h1>
    </div>

</div>
  );
};

export default Card;
