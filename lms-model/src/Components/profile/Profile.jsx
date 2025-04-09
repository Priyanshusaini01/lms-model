import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import AccountSecurity from "./AccountSecurity";
import Subscription from "./Subscription";
import Notifications from "./Notifications";
import AccountClose from "./AccountClose";
import PublicProfile from "./PublicProfile";
import PrivacySettings from "./PrivacySettings";
import Payment from "./Payment";
import { useSelector } from "react-redux";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <PublicProfile />;
      case "photo":
        return <div>
          <h1 className="text-2xl font-bold">Photo</h1>
        <p className="text-gray-600">Add a nice photo of yourself for your profile.</p>
        <div className="mt-6">
          <h2 className="text-lg font-bold">Image preview</h2>
          <div className="w-full h-32 border border-gray-300 flex items-center justify-center mt-2">
            <img src={image} alt="Preview of the uploaded image" className="rounded-full h-32 w-32"/>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-bold">Add / Change Image</h2>
          <div className="flex items-center mt-2">
            <input type="file" className="border border-gray-300 p-2" onChange={handleImageChange}/>
            <span className="ml-2">{fileName}</span>
            <button className="ml-4 bg-gray-200 text-black px-4 py-2">Upload image</button>
          </div>
        </div>
        <button className="mt-6 bg-black text-white px-4 py-2" onClick={handleSave}>Save</button>
        </div>;
      case "accountSecurity":
        return <AccountSecurity />;
      case "subscriptions":
        return <Subscription />;
      case "paymentMethods":
        return <Payment />;
      case "privacy":
        return <PrivacySettings />;
      case "notifications":
        return <Notifications />;
      case "apiClients":
        return <h1 className="text-2xl font-bold">API Clients</h1>;
      case "closeAccount":
        return <AccountClose />;
      default:
        return null;
    }
  };

  // for username
  const user = useSelector((state) => state.currentUser.User); //

  const course = useSelector((state) => state.courses.courses);
  const publishedCourses = course.filter((item) => item.isPublished === true);
  // console.log(publishedCourses);

  const [myCourses, setMyCourses] = useState([]);
  const userName = user.name;
  console.log(publishedCourses);

  useEffect(() => {
    setMyCourses(user.enrolledCourses);
  }, [user]);

  //For image
  const [image, setImage] = useState("https://placehold.co/100x100");
  const [fileName, setFileName] = useState("OIP (16).jpeg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("Image saved successfully!");
  };

  return (
    <div>
    <div className="flex justify-center justify-items-center relative z-50 mix-blend-plus-darker ">
      <div className="flex w-[50vw] border border-gray-200  shadow-xl min-h-screen ">
        <aside className="w-1/4 bg-gray-200  p-8">
          <div className="flex flex-col items-center">
            {/* <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center text-white text-3xl" >
            {croppedImage ? (
              <img src={croppedImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              "SS"
            )}
            </div> */}
            <img src={image} alt="Profile image" className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center text-white text-2xl"/>
            <h2 className="mt-4 text-xl font-semibold">{userName}</h2>
          </div>

          <nav className="mt-8">
            <ul>
              <li className="py-2">
                <a
                  href="/class/:user"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("publicProfile")}
                >
                  View public profile
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("profile")}
                >
                  Profile
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("photo")}
                >
                  Photo
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("accountSecurity")}
                >
                  Account Security
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("subscriptions")}
                >
                  Subscriptions
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("paymentMethods")}
                >
                  Payment methods
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("privacy")}
                >
                  Privacy
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("notifications")}
                >
                  Notifications
                </a>
              </li>
              {/* <li className="py-2">
              <a href="#" className="text-gray-700 hover:text-black hover:font-bold" onClick={() => setActiveSection('apiClients')}>
                API clients
              </a>
            </li> */}
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black hover:font-bold"
                  onClick={() => setActiveSection("closeAccount")}
                >
                  Close account
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="w-3/4 bg-white  p-8">{renderSection()}</main>
      </div>
      </div>
      <video className=" absolute inset-0 w-full h-full object-cover opacity-65" autoPlay muted loop>
          <source src="https://media.istockphoto.com/id/1393603552/video/futuristic-user-interface-with-hud-and-infographic-elements.mp4?s=mp4-640x640-is&k=20&c=9oR2_CJtMyyWc5YxaBQWkwl9cw05qXE_InF1aiqP6m0=" type="video/mp4" />
          
        </video>
      </div>
  );
};

export default Profile;
