import React from 'react'

function AccountSecurity () {
  return (
      <div>
        <h1 className="text-2xl font-bold mb-2">Account</h1>
        <p className="text-gray-600 mb-6">Edit your account settings and change your password here.</p>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email:</label>
          <div className="border p-2 rounded bg-gray-100">Your email address is sanakhan300407262@gmail.com</div>
        </div>
        <div className="mb-6">
          <input type="password" placeholder="Enter new password" className="w-full border p-2 rounded mb-4" />
          <input type="password" placeholder="Re-type new password" className="w-full border p-2 rounded mb-4" />
          <button className="bg-black text-white py-2 px-4 rounded">Change password</button>
        </div>
        <div className="border p-4 rounded bg-gray-100">
          <h2 className="font-bold mb-2">Multi-factor Authentication</h2>
          <p className="text-gray-600 mb-4">Increase your account security by requiring that a code emailed to you be entered when you log in. For more information on how multi-factor authentication works, refer to our <a href="#" className="text-blue-600">Help Center article</a>.</p>
          <button className="bg-black text-white py-2 px-4 rounded">Enable</button>
        </div>
      </div>
  )
}

export default AccountSecurity
