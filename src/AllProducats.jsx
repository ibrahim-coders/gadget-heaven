import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const AllProducats = () => {
  const products = useLoaderData();

  console.log(products);
  const { category } = useParams();

  const [Product, setdProducts] = useState([]);

  console.log(Product);

  useEffect(() => {
    if (category === 'All_Producat') {
      setdProducts(products);
    } else if (category) {
      const ProducatsItems = [...products].filter(
        product => product.category === category
      );
      setdProducts(ProducatsItems);
    } else {
      setdProducts(products.slice(0, 6));
    }
  }, [category, products]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-4">
        {Product.slice(0, 6).map(product => (
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
            <Link
              to={`/producat/${product.product_id}`}
              className="btn bg-violet-600 rounded-full my-4 text-white hover:text-black"
            >
              View Details
            </Link>
            <p>{}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducats;
