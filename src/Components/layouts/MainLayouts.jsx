import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

const MainLayouts = () => {
  return (
    <div>
      <NavBar />
      <div className="h-auto container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
