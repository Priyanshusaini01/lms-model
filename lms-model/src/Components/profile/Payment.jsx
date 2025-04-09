import React from "react";

const Payment = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Payment methods</h1>
      <div className=" mb-4">
        <div className="mt-8 mb-8 bg-gray-100 px-4 py-5 rounded">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
              defaultChecked
            />
            <span className="ml-2 text-gray-700">
              Show my saved payment methods on the checkout step.
            </span>
          </label>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            Your saved payment methods
          </h2>
          <div className="border border-dashed border-gray-400 p-9 text-center">
            <p className="text-gray-600">
              You don’t have any saved payment method
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
