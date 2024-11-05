import { useEffect, useState } from 'react';
import { getAllProducts } from '../Utilities/Utilities';

const DeshBoard = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const producats = getAllProducts();
    setProduct(producats);
  }, []);
  console.log(product);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-4">
        {product.map(product => (
          <div
            key={product.product_id}
            className="border rounded-lg  shadow-md p-6"
          >
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-full h-48 rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.product_title}</h2>
            <p className="text-gray-700 text-xl  mb-2">Price${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeshBoard;
