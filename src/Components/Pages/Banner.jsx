const Banner = () => {
  return (
    <div className="overflow-hidden mx-auto">
      {/* Main Banner Content */}
      <div className="bg-violet-700  py-10 px-6 md:px-10 lg:px-20 text-center relative mx-auto ">
        <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-4 max-w-screen-md mx-auto">
          Upgrade Your Tech with Gadget Heaven Accessories
        </h2>
        <p className="text-white text-sm md:text-base lg:text-lg mb-6 max-w-screen-md mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white text-violet-700 font-semibold py-2 px-6 rounded-full hover:bg-violet-600 hover:text-white transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Background Image */}
      {/* <div className="bg-banner bg-cover bg-center absolute  t-[-30%] w-[800px] h-1/2 z-10 mx-auto items-center text-center "></div> */}
    </div>
  );
};

export default Banner;
