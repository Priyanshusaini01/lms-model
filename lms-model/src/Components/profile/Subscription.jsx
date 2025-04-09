import React from "react";

const Subscription = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Subscriptions</h1>
      <p className="text-lg mb-6">Manage your Oddiq subscriptions</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Active plans</h2>
        <div className="border border-dashed border-gray-400 p-4">
          <p className="text-gray-600">
            You don't have any active subscriptions
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
          Subscription plans available
        </h2>
        <div className="border border-gray-300 p-6 flex">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Personal Plan</h3>
            <p className="mb-4">
              New opportunities await. Sign up for Personal Plan to get all this
              and more:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Access to 12,000+ top courses</li>
              <li>Courses in tech, business, and more</li>
              <li>Practice tests, exercises, and Q&A</li>
            </ul>
            <div className="flex items-center">
              <button className="bg-black text-white px-4 py-2 rounded mr-4">
                Subscribe
              </button>
              <a href="#" className="text-purple-600">
                Learn more
              </a>
            </div>
            <p className="text-gray-600 mt-2">
              Starting at ₹1,039 per month. Cancel anytime.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://i.pinimg.com/736x/5e/ee/b8/5eeeb8d270ed8eee7e04b635ed382838.jpg"
              alt="Illustration of a person opening a door with various icons representing learning and growth"
              className="w-48 h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
