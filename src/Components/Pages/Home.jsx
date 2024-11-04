import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Heding from './Heding';
import CategoriesBtn from './CategoriesBtn';

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className=" max-w-screen-2xl mx-auto">
      <Banner />
      <Heding
        title={'Browse Coffees by Category'}
        subtitle={
          'Choose your desired coofee caegory to browse throgh specific coffees that fit in your taste'
        }
      />

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 p-4">
          <CategoriesBtn categories={categories} />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
