import React from 'react';

const PaymentModal = ({ closeModal }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm">
        <div className="modal rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto">
          <form className="modal-box px-5 flex flex-col justify-center items-center space-y-5">
            {/* Heading */}
            <h3 className="font-bold text-2xl text-primary my-2">
              Congratulations!
            </h3>

            {/* Icon */}
            <img src="assets/coin.png" alt="Coin" />

            {/* Message Content */}
            <div className="text-center space-y-3">
              <p className="font-medium text-xl"></p>
              <h3 className="text-2xl font-semibold">Successfully</h3>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="btn hover:text-red-600 text-gray-800 font-bold py-2 px-6 rounded-md"
            >
              Close Confirmation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
