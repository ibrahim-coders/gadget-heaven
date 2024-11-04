const Footer = () => {
  return (
    <footer className="w-full text-slate-500">
      {/*      <!-- Main footer --> */}
      <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center p-4 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Gadget Heaven
            </h2>
            <p className="mt-2 text-lg md:text-xl text-center">
              Leading the way in cutting-edge technology and innovation
            </p>
            <div className="border-t border-gray-300 w-full mt-4"></div>
          </div>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mx-auto">
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-4 mx-auto"
              aria-labelledby="footer-product-3-sub"
            >
              <h3
                className="mb-6 text-base font-medium text-slate-700"
                id="footer-product-3-sub"
              >
                Service
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Producat Support
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Order Tracking
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Shipping & Delivery
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-4"
              aria-labelledby="footer-about-3-sub"
            >
              <h3
                className="mb-6 text-base font-medium text-slate-700"
                id="footer-about-3-sub"
              >
                Company
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    About us
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-4"
              aria-labelledby="footer-get-in-touch-3-sub"
            >
              <h3
                className="mb-6 text-base font-medium text-slate-700"
                id="footer-get-in-touch-3-sub"
              >
                Legal
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Privace Police
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Cookie Police
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Join research
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/*      <!-- Sub Footer --> */}
      <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
            <nav
              className="col-span-3 md:col-span-4 lg:col-span-6"
              aria-labelledby="subfooter-links"
            >
              <h3 className="sr-only" id="subfooter-links">
                Get in touch
              </h3>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
