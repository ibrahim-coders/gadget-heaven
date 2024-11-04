const Footer = () => {
  return (
    <footer className="w-full text-slate-500  border-t border-slate-200 pt-16 pb-12 text-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Gadget Heaven</h2>
        <p className="mt-2 text-lg md:text-xl">
          Leading the way in cutting-edge technology and innovation
        </p>
        <div className="border-t border-gray-300 w-full mt-6"></div>
      </div>

      <div className="container mx-auto px-6 mt-8 flex flex-col md:flex-row md:justify-around text-center md:text-left space-y-4 md:space-y-0">
        <nav>
          <h6 className="font-semibold mb-2">Services</h6>
          <a href="#" className="block hover:underline">
            Product Support
          </a>
          <a href="#" className="block hover:underline">
            Order Tracking
          </a>
          <a href="#" className="block hover:underline">
            Shipping & Delivery
          </a>
          <a href="#" className="block hover:underline">
            Returns
          </a>
        </nav>
        <nav>
          <h6 className="font-semibold mb-2">Company</h6>
          <a href="#" className="block hover:underline">
            About us
          </a>
          <a href="#" className="block hover:underline">
            Contact
          </a>
          <a href="#" className="block hover:underline">
            Jobs
          </a>
        </nav>
        <nav>
          <h6 className="font-semibold mb-2">Legal</h6>
          <a href="#" className="block hover:underline">
            Terms of use
          </a>
          <a href="#" className="block hover:underline">
            Privacy policy
          </a>
          <a href="#" className="block hover:underline">
            Cookie policy
          </a>
          <a href="#" className="block hover:underline">
            Join research
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
