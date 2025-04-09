import React, { useState } from "react";

function Notifications() {
  const [promotions, setPromotions] = useState(true);
  const [announcements, setAnnouncements] = useState(true);
  const [promotionalEmails, setPromotionalEmails] = useState(false);

  const handlePromotionsChange = () => {
    setPromotions(!promotions);
  };

  const handleAnnouncementsChange = () => {
    setAnnouncements(!announcements);
  };

  const handlePromotionalEmailsChange = () => {
    setPromotionalEmails(!promotionalEmails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <p className="text-gray-600 mb-6">
        Manage the types of communications you receive.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className=" p-7">
          <h3 className="text-lg w-96 font-medium mb-2">I want to receive:</h3>

          <div className="flex items-center mb-2 p-5 w-[28vw] border border-black">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
              checked={promotions}
              onChange={handlePromotionsChange}
            />
            <label className="ml-3 font-semibold text-gray-700 ">
              Promotions, course recommendations, and helpful resources from
              Oddiq.
            </label>
          </div>

          <div className="flex flex-col mb-2 p-5 w-[28vw] border border-black">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                checked={announcements}
                onChange={handleAnnouncementsChange}
              />
              <label className="ml-3 font-semibold text-gray-700">
                Announcements from instructors whose course(s) I&#39;m enrolled
                in.
              </label>
            </div>
            <p className="text-xs text-gray-500 ml-7">
              To adjust this preference by course, leave this box checked and go
              to the course dashboard and click on "Options" to opt in or out of
              specific announcements.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-2 p-5 w-[28vw] border border-black">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
              checked={promotionalEmails}
              onChange={handlePromotionalEmailsChange}
            />
            <label className="ml-3 font-semibold text-gray-700">
              Don&#39;t send me any promotional emails.
            </label>
          </div>
          <p className="text-xs text-gray-500 ml-7">
            If this box is checked, please note that you will continue to
            receive important transactional emails like purchase receipts.
          </p>
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Notifications;
