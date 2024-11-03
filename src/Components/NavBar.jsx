import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';

const NavBar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <header className="relative z-20 w-full border-b shadow-lg border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/* Brand logo */}
            <h2 className="text-3xl font-bold text-gray-500 my-auto items-center">
              Gadget Heaven
            </h2>

            {/* Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[18.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/70 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? 'visible opacity-100 backdrop-blur-sm'
                  : 'invisible opacity-0'
              }`}
            >
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 ${
                      isActive ? 'text-emerald-500 font-semibold' : ''
                    }`
                  }
                >
                  <span>Home</span>
                </NavLink>
              </li>

              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/statistic"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 ${
                      isActive ? 'text-emerald-500 font-semibold' : ''
                    }`
                  }
                >
                  Statistic
                </NavLink>
              </li>

              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/deshboard"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 ${
                      isActive ? 'text-emerald-500 font-semibold' : ''
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
            {/* Mobile trigger */}
            <div className="flex">
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
                  isToggleOpen
                    ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                    : ''
                }`}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? 'true' : 'false'}
                aria-label="Toggle navigation"
              >
                <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 mx-2">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>

              <div className="flex gap-4 text-center items-center">
                <FaCartShopping className="text-2xl xl:text-3xl" />
                <AiOutlineHeart className="text-2xl xl:text-3xl" />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
