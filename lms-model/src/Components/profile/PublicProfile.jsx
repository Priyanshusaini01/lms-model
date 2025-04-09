import React from 'react'

const PublicProfile = () => {
  
  return (
    <div>
        <h1 className="text-2xl font-semibold mb-2">Public profile</h1>
        <p className="text-gray-600 mb-6">Add information about yourself</p>
        <div>
          <h2 className="text-lg font-semibold mb-2">Basics:</h2>
          <div className="mb-4">
            <input type="text" placeholder="First Name" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Last Name" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Headline" className="w-full border border-gray-300 p-2 rounded" />
            <div className="text-right text-gray-500 text-sm">60</div>
          </div>
          <p className="text-gray-500 text-sm mb-2">Add a professional headline like, "Instructor at Udemy" or "Architect."</p>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <button className="border border-gray-300 p-1 rounded mr-2"><i className="fas fa-bold"></i></button>
              <button className="border border-gray-300 p-1 rounded"><i className="fas fa-italic"></i></button>
            </div>
            <textarea className="w-full border border-gray-300 p-2 rounded h-24"></textarea>
          </div>
          <div className="mb-4">
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>English (US)</option>
            </select>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Links:</h2>
          <div className="mb-4">
            <input type="text" placeholder="Website (http(s)://..)" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="http://twitter.com/" className="w-full border border-gray-300 p-2 rounded" />
            <p className="text-gray-500 text-sm">Twitter Profile</p>
          </div>
          <div className="mb-4">
            <input type="text" placeholder="http://www.facebook.com/" className="w-full border border-gray-300 p-2 rounded" />
            <p className="text-gray-500 text-sm">Facebook Profile</p>
          </div>
          <div className="mb-4">
            <input type="text" placeholder="http://www.linkedin.com/" className="w-full border border-gray-300 p-2 rounded" />
            <p className="text-gray-500 text-sm">LinkedIn Profile</p>
          </div>
          <div className="mb-4">
            <input type="text" placeholder="http://www.youtube.com/" className="w-full border border-gray-300 p-2 rounded" />
            <p className="text-gray-500 text-sm">Youtube Profile</p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">Save</button>
      </div>
  )
}

export default PublicProfile
