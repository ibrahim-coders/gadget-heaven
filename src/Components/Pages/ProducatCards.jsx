import { useEffect } from 'react';
import { CiTrash } from 'react-icons/ci';

const ProducatCards = ({ wishListproduct, WishListremoveProducat }) => {
  useEffect(() => {
    document.title = 'Product | ProducatCards';
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 p-4">
        {wishListproduct.map(p => (
          <div
            key={p.product_id}
            className="flex flex-col md:flex-row items-center md:justify-between text-center border mx-4 md:mx-20 p-4"
          >
            <div className="w-full md:w-1/3">
              <img
                src={p.product_image}
                alt="Product"
                className="w-full h-48 rounded-md p-4 "
              />
            </div>

            <div className="flex flex-col items-start my-4 md:my-6 text-start ml-0 md:ml-6 w-full">
              <h2 className="text-lg md:text-xl font-bold mt-2 md:mt-4">
                {p.product_title}
              </h2>
              <p className="pb-2 text-sm md:text-base">{p.description}</p>
              <p className="text-gray-700 text-lg md:text-xl pb-2">
                Price: ${p.price}
              </p>
            </div>

            <div className="text-gray-500 mt-2 md:mt-0 cursor-pointer hover:text-red-500 transition-all duration-300">
              <CiTrash
                onClick={() => WishListremoveProducat(p.product_id)}
                size={24}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProducatCards;
