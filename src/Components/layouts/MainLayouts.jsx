import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { ToastContainer } from 'react-toastify';
const MainLayouts = () => {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <div className="min-h-[calc(100vh-232px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
