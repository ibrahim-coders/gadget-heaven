import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';

import { FaStar } from 'react-icons/fa';
import {
  getAllProducts,
  handelAddProducat,
  handelRemoveProducat,
} from '../Utilities/Utilities';
const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  console.log('Loader data', data);
  console.log(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = data.find(p => p.product_id === parseInt(id));
    setProduct(product);
  }, [data, id]);

  console.log(product);

  //handle add to cart
  const handelAddToCard = product => {
    handelAddProducat(product);
  };

  const wishListAdd = product => {
    handelAddProducat(product);
    console.log(product);
  };
  useEffect(() => {
    document.title = 'ProductDetails | Gadget';
  }, []);
  return (
    <div className=" w-full mx-auto items-center h-[750px] ">
      <div className="bg-violet-700 py-10 px-4 md:px-10 lg:px-20 text-center  mx-auto ">
        <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-4 max-w-screen-md mx-auto">
          Product Details
        </h2>
        <p className="text-white text-sm md:text-base lg:text-lg mb-6 max-w-screen-md mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="  flex flex-col md:flex-row max-w-screen-md mx-auto border p-4 md:p-6 space-y-4  bg-white  items-center my-8">
        {/* img */}
        <div className="flex-shrink-0">
          <img
            src={product.product_image}
            alt=""
            className="h-48 md:h-64 rounded-md px-6"
          />
        </div>

        <div className="flex flex-col justify-center space-y-2 md:space-y-3">
          <h2 className="text-lg md:text-xl font-bold">
            {product.product_title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg font-bold">
            Price: ${product.price}
          </p>

          <div className="w-40 items-start">
            <button className="text-green-600 font-medium bg-green-100 py-2 px-4 rounded">
              In Stock
            </button>
          </div>
          <p className="text-gray-700 text-base md:text-lg">
            {product.description}
          </p>
          <p className="text-gray-700 text-base md:text-lg font-bold">
            {' '}
            Specification: <br />
            <span className="font-thin">{product.specification}</span>
          </p>

          <h3 className="text-lg md:text-xl font-semibold">Rating</h3>
          <div className="flex items-center gap-1">
            <span className="flex items-center gap-1 text-amber-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>{product.rating}</span>
            </span>
          </div>
          <div className="flex  text-center gap-4">
            <button
              onClick={() => handelAddToCard(product)}
              className="btn bg-violet-700 text-white"
            >
              Add to Cart <FaCartShopping className="text-2xl" />
            </button>
            <AiOutlineHeart
              onClick={() => wishListAdd(product)}
              className="text-4xl  my-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
