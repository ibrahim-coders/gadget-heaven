import { useState } from 'react';
import Producats from '../../Producats';

const CategoriesBtn = ({ categories }) => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState('All Products');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto p-4 gap-4">
      <div className="grid grid-cols-1 mx-8 px-6">
        {/* All Products button */}
        <button
          onClick={() => setActiveCategory('All Products')}
          className={`btn px-4 py-2 rounded-full my-4 transition duration-200 ${
            activeCategory === 'All Products'
              ? 'bg-blue-700 text-white'
              : 'bg-violet-700 text-white hover:bg-violet-600'
          }`}
        >
          All Products
        </button>

        {/* Category buttons */}
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.category); // Set active category
              window.location.href = `/cat/${category.category}`;
            }}
            className={`btn px-4 py-2 rounded-full my-4 transition duration-200 ${
              activeCategory === category.category
                ? 'bg-blue-700 text-white' // Active styling
                : 'bg-violet-700 text-white hover:bg-violet-600'
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>
      {/* <Producats /> */}
    </div>
  );
};

export default CategoriesBtn;
