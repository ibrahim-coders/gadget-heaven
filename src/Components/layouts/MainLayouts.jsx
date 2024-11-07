import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayouts = () => {
  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <NavBar />
      <div className=" container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
