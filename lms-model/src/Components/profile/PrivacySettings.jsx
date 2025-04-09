import React from 'react'

const PrivacySettings = () => {
  return (
    
      <div >
        <h1 className="text-2xl font-bold mb-2">Privacy</h1>
        <p className=" text-gray-600 mb-6">Modify your privacy settings here.</p>
        <div className=" mb-4">
          <h2 className="font-semibold mb-4">Profile page settings</h2>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" defaultChecked />
              <span className="ml-2 text-gray-700">Show your profile to logged-in users</span>
            </label>
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" defaultChecked />
              <span className="ml-2 text-gray-700">Show courses you're taking on your profile page</span>
            </label>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
  )
}

export default PrivacySettings