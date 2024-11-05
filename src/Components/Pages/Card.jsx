// import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Card = ({ products }) => {
  const { product_image, product_title, price } = products;
  console.log(products);
  const { category } = useParams();
  console.log(category);
  // const [Product, setProducts] = useState([]);

  // useEffect(() => {
  //   if (category === 'All_Product') {
  //     setProducts(product);
  //   } else (category) {
  //     const filteredProducts = [...products].filter(
  //       products => products.category === category
  //     );
  //     setProducts(filteredProducts);
  //   }
  // }, [category, products]);

  return (
    <div>
      <div className="">
        <div className="border rounded-lg shadow-md p-6">
          <img
            src={product_image}
            alt=""
            className="w-full h-48 rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{product_title}</h2>
          <p className="text-gray-700 text-xl mb-2">Price: ${price}</p>

          <Link
            // to={`/category/${product.product_id}`}
            className="btn bg-violet-600 rounded-full my-4 text-white hover:text-black"
          >
            View Details
          </Link>
        </div>
        {/* <button
        onClick={showMoreProducts}
        className="btn bg-violet-600 rounded-full my-4 text-white hover:text-black"
      >
        Show More
      </button> */}

        {/* {Product.slice(0, visibleProducts).map(product => (
          <div
            key={product.product_id}
            className="border rounded-lg shadow-md p-6"
          >
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-full h-48 rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.product_title}</h2>
            <p className="text-gray-700 text-xl mb-2">
              Price: ${product.price}
            </p>
            <Link
              // to={`/category/${product.product_id}`}
              className="btn bg-violet-600 rounded-full my-4 text-white hover:text-black"
            >
              View Details
            </Link>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Card;
