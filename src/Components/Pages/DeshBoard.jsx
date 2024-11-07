import { useEffect, useState } from 'react';
import {
  addWishListProducat,
  getAllProducts,
  handelRemoveProducat,
  WishListRemoveProducat,
} from '../Utilities/Utilities';
import Card from './Card';
import ProducatCards from './ProducatCards';

const DeshBoard = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const producats = getAllProducts();
    setProduct(producats);
  }, []);
  console.log(product);

  // const [removeProducats, removSetProduct] = useState({});
  // useEffect(() => {
  //   const producats = getAllProducts();
  //   removSetProduct(producats);
  // }, []);

  console.log(product);

  const removeProducat = productId => {
    handelRemoveProducat(productId);
    const updatedProducts = getAllProducts();
    setProduct(updatedProducts);
  };

  const [wishListproduct, setWishListProduct] = useState([]);
  useEffect(() => {
    const producats = addWishListProducat();
    setWishListProduct(producats);
  }, []);

  const WishListremoveProducat = productId => {
    WishListRemoveProducat(productId);
    const updatedProducts = addWishListProducat();
    setProduct(updatedProducts);
  };
  const [activeBtn, setButton] = useState({
    btn: true,
    status: 'available',
  });

  const handleButtonClick = status => {
    if (status === 'available') {
      setButton({
        btn: true,
        status: 'available',
      });
    } else {
      setButton({
        btn: false,
        status: 'selected',
      });
    }
  };
  useEffect(() => {
    document.title = 'dashboard|Gadget';
  }, []);
  return (
    <div>
      <div className="bg-violet-600 p-6 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Dashboard</h2>
        <p className="text-sm md:text-base lg:text-lg mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br />
          the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center text-center w-full gap-6 items-center mx-auto">
          <button
            onClick={() => handleButtonClick('available')}
            className={`${
              activeBtn.status === 'available'
                ? 'bg-green-600 text-white'
                : 'bg-white text-violet-600'
            } font-semibold  py-2 rounded hover:bg-violet-700 hover:text-white transition-all duration-300 px-8 p-2`}
          >
            Cart
          </button>

          <button
            onClick={() => handleButtonClick('selected')}
            className={`${
              activeBtn.status === 'selected'
                ? 'bg-green-600 text-white'
                : 'bg-white text-violet-600'
            } font-semibold px-4 py-2 rounded hover:bg-violet-700 hover:text-white transition-all duration-300`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="mt-4">
        {activeBtn.status === 'available' ? (
          <Card product={product} removeProducat={removeProducat} />
        ) : (
          <ProducatCards
            wishListproduct={wishListproduct}
            WishListremoveProducat={WishListremoveProducat}
          />
        )}
      </div>
    </div>
  );
};

export default DeshBoard;
