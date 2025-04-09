import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Section = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 pb-2 mb-4">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="text-lg font-semibold">{title}</h3>
                {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
            </div>
            {isOpen && <ul className="ml-4 mt-2">{children}</ul>}
        </div>
    );
};

const Husk = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [videoSrc, setVideoSrc] = useState();

    const handleVideoChange = (src) => {
        setVideoSrc(src);
        setActiveTab('Overview');
    };

    return (
        <div className="w-full mx-auto p-4">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                    <div className="bg-white p-4 shadow-md">
                        <video controls className="w-full mb-4" controlsList="nodownload">
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="flex space-x-4 border-b border-gray-200 pb-2 mb-4 overflow-x-auto">
                            {['Overview', 'Notes', 'Announcements', 'Reviews', 'Learning tools'].map(tab => (
                                <a
                                    key={tab}
                                    href="#"
                                    className={`text-gray-500 ${activeTab === tab ? 'border-b-2 border-blue-500 font-semibold text-gray-900' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </a>
                            ))}
                        </div>
                        {activeTab === 'Overview' && (
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Learn to program! Let's walk through some simple examples and I'll explain everything along the way.</h1>
                                <div className="flex items-center mb-4 flex-wrap">
                                    <span className="text-yellow-500 text-xl"><i className="fas fa-star"></i></span>
                                    <span className="ml-2 text-gray-700 text-lg">4.5</span>
                                    <span className="ml-2 text-gray-500">(10,242 ratings)</span>
                                    <span className="ml-4 text-gray-700 text-lg">165,194</span>
                                    <span className="ml-2 text-gray-500">Students</span>
                                    <span className="ml-4 text-gray-700 text-lg">3 hours</span>
                                    <span className="ml-2 text-gray-500">Total</span>
                                </div>
                                <div className="flex items-center text-gray-500 mb-4 flex-wrap">
                                    <i className="fas fa-globe mr-2"></i>
                                    <span>Last updated October 2015</span>
                                    <i className="fas fa-language ml-4 mr-2"></i>
                                    <span>English</span>
                                    <span className="ml-2">(English [Auto])</span>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-md mb-4">
                                    <div className="flex items-center mb-2">
                                        <i className="fas fa-clock text-gray-700 mr-2"></i>
                                        <span className="text-gray-700 font-semibold">Schedule learning time</span>
                                    </div>
                                    <p className="text-gray-600 mb-2">Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Get started</button>
                                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Dismiss</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                                    <div>
                                        <h2 className="font-semibold">By the numbers</h2>
                                        <p>Skill level: Beginner Level</p>
                                        <p>Students: 165194</p>
                                        <p>Languages: English</p>
                                        <p>Captions : Yes</p>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">Lectures: 17</h2>
                                        <p>Video: 3 total hours</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'Notes' && (
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Notes</h1>
                                <p className="text-gray-700">This is the notes section.</p>
                            </div>
                        )}
                        {activeTab === 'Announcements' && (
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Announcements</h1>
                                <p className="text-gray-700">This is the announcements section.</p>
                            </div>
                        )}
                        {activeTab === 'Reviews' && (
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Reviews</h1>
                                <p className="text-gray-700">This is the reviews section.</p>
                            </div>
                        )}
                        {activeTab === 'Learning tools' && (
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Learning tools</h1>
                                <p className="text-gray-700">This is the learning tools section.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full lg:w-1/3 lg:ml-4 mt-4 lg:mt-0">
                    <div className="bg-white p-4 shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Course content</h2>
                        <Section title="Section 1: Getting Up and Running">
                            <li className="flex items-center mb-2 cursor-pointer" onClick={() => handleVideoChange("https://media.istockphoto.com/id/473002839/video/app-development-simple-diagram.mp4?s=mp4-640x640-is&k=20&c=KN2N_sEY7lDvbn9AwTO4--gI29VwHHu66VR2OoDjEkQ=")}>
                                <input type="checkbox" className="mr-2" />
                                <span>1. Installing the JDK and Eclipse</span>
                                <span className="ml-auto text-gray-500">3min</span>
                            </li>
                            <li className="flex items-center mb-2 cursor-pointer" onClick={() => handleVideoChange("https://media.istockphoto.com/id/1393603552/video/futuristic-user-interface-with-hud-and-infographic-elements.mp4?s=mp4-640x640-is&k=20&c=9oR2_CJtMyyWc5YxaBQWkwl9cw05qXE_InF1aiqP6m0=")}>
                                <input type="checkbox" className="mr-2" />
                                <span>2. Hello World and Eclipse shortcuts</span>
                                <span className="ml-auto text-gray-500">6min</span>
                            </li>
                        </Section>
                        <Section title="Section 2: The Basics.">
                            <li className="flex items-center mb-2 cursor-pointer" onClick={() => handleVideoChange("https://media.istockphoto.com/id/1130868155/video/professional-it-programer-working-in-data-center-on-desktop-computer-with-three-displays.mp4?s=mp4-640x640-is&k=20&c=R_Ab6ScVk2-Dnl7iILEWDfpliqK_9Ht_ESBCf_7J9k4=")}>
                                <input type="checkbox" className="mr-2" />
                                <span>1. Introduction to Variables</span>
                                <span className="ml-auto text-gray-500">10min</span>
                            </li>
                            <li className="flex items-center mb-2 cursor-pointer" onClick={() => handleVideoChange("https://www.w3schools.com/html/movie.mp4")}>
                                <input type="checkbox" className="mr-2" />
                                <span>2. Data Types</span>
                                <span className="ml-auto text-gray-500">15min</span>
                            </li>
                        </Section>
                        <Section title="Section 3: Object Oriented Programming">
                            <li className="flex items-center mb-2 cursor-pointer" onClick={() => handleVideoChange("https://media.istockphoto.com/id/1393603552/video/futuristic -user-interface-with-hud-and-infographic-elements.mp4?s=mp4-640x640-is&k=20&c=9oR2_CJtMyyWc5YxaBQWkwl9cw05qXE_InF1aiqP6m0=")}>
                                <input type="checkbox" className="mr-2" />
                                <span>1. Classes and Objects</span>
                                <span className="ml-auto text-gray-500">20min</span>
                            </li>
                            <li className="flex items-center mb-2 cursor-pointer" onClick={() => handleVideoChange("https://www.w3schools.com/html/movie.mp4")}>
                                <input type="checkbox" className="mr-2" />
                                <span>2. Inheritance</span>
                                <span className="ml-auto text-gray-500">30min</span>
                            </li>
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Husk;