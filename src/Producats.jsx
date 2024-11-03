import { useLoaderData } from 'react-router-dom';

const Producats = () => {
  const producat = useLoaderData();
  console.log(producat);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-4">
      {producat.map(product => (
        <div
          key={product.product_id}
          className="border rounded-lg p-4 shadow-md"
        >
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">
            {product.product_title}
          </h2>
          <p className="text-gray-700 font-medium mb-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Producats;
