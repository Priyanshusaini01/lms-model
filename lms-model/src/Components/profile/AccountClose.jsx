import React from 'react';

const AccountClose = () => {
  return (
   
      <div>
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-bold mb-2">Close Account</h2>
        <p className="text-gray-600 mb-4">Close your account permanently.</p>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
          <p className="font-bold">Warning:</p>
          If you close your account, you will be unsubscribed from all 5 of your courses and will lose access to your account and data associated with your account forever, even if you choose to create a new account using the same email address in the future.
        </div>
        <p className="text-gray-600 mb-4">Please note, if you want to reinstate your account after submitting a deletion request, you will have 14 days after the initial submission date to reach out to privacy info@oddiq.com to cancel this request.</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Close account
        </button>
      </div>
      </div>
  );
};

export default AccountClose;