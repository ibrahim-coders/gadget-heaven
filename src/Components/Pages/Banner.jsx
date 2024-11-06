const Banner = () => {
  return (
    <div className="h-auto w-full mx-auto flex flex-col items-center relative px-6 ">
      {/* Main Banner Content */}
      <div className="bg-violet-700 pb-10 px-4 md:px-10 lg:px-20 text-center h-[500px] flex flex-col justify-center items-center w-full">
        <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-4 max-w-screen-md">
          Upgrade Your Tech with Gadget Heaven Accessories
        </h2>
        <p className="text-white text-sm md:text-base lg:text-lg mb-6 max-w-screen-md">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white text-violet-700 font-semibold py-2 px-6 rounded-full hover:bg-violet-600 hover:text-white transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Floating Banner Section */}
      <div className="w-full flex justify-center relative -mt-32">
        <div className="w-[90%] md:w-[60%] h-[400px] bg-banner bg-cover bg-center rounded-lg shadow-lg border border-gray-200"></div>
      </div>
    </div>
  );
};

export default Banner;
