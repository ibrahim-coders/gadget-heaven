import { NavLink, useParams } from 'react-router-dom';

const CategoriesBtn = ({ categories }) => {
  const obj = useParams();
  console.log(obj);
  return (
    <div className="grid grid-cols-1  gap-8 p-4 border rounded-lg  shadow-md mx-8 mt-4 text-center">
      {categories.map(category => (
        <NavLink
          to={`/category/${category.category}`}
          key={category.id}
          className={({ isActive }) =>
            `px-6 py-2 rounded-full transition duration-200  ${
              isActive
                ? 'bg-violet-600 text-white'
                : 'bg-gray-400 text-gray-900'
            } hover:bg-violet-600`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoriesBtn;
