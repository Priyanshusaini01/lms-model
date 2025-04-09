import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdNewReleases } from "react-icons/md";

const Section = ({ title, duration, items, videoUrl, description, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        onSelect(isOpen ? null : { videoUrl, description }); // Pass the video URL and description if opening the section
    };

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center font-semibold cursor-pointer" onClick={handleToggle}>
                {title}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className="text-sm text-gray-400">{duration}</div>
            {isOpen && (
                <ul className="ml-4 mt-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <input type="checkbox" className="mr-2" />
                            <span>{item.title}</span>
                            <span className="ml-auto text-gray-400">{item.duration}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const Vid = () => {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentDescription, setCurrentDescription] = useState('');
    const [activeTab, setActiveTab] = useState('Overview');

    const sections = [
        {
            title: 'Section 1: Getting Up and Running',
            duration: '0 / 2 | 9min',
            videoUrl: "https://media.istockphoto.com/id/1393603552/video/futuristic-user-interface-with-hud-and-infographic-elements.mp4?s=mp4-640x640-is&k=20&c=9oR2_CJtMyyWc5YxaBQWkwl9cw05qXE_InF1aiqP6m0=",
            description: 'In this section, we will cover the basics of getting started with programming, including setting up your environment and understanding the fundamental concepts.',
            items: [
                { title: '1. Types and Variables', duration: '13min' },
                { title: '2. Methods', duration: '13min' }
            ]
        },
        {
            title: 'Section 2: The Basics.',
            duration: '0 / 5 | 1hr',
            videoUrl: "https://media.istockphoto.com/id/1130868155/video/professional-it-programer-working-in-data-center-on-desktop-computer-with-three-displays.mp4?s=mp4-640x640-is&k=20&c=R_Ab6ScVk2-Dnl7iILEWDfpliqK_9Ht_ESBCf_7J9k4=",
            description: 'This section dives into the fundamental principles of programming, including types, variables, and control flow. You will learn how to write simple programs and understand their structure.',
            items: [
                { title: '3. Types and Variables', duration: '13min' },
                { title: '4. Methods', duration: '13min' },
                { title: '5. Variable Scope', duration: '7min' },
                { title: '6. Conditionals', duration: '15min' },
                { title: '7. Loops (and an intro to the debugger!)', duration: '12min' }
            ]
        },
        {
            title: 'Section 3: Object Oriented Programming',
            duration: '0 / 10 | 1hr 40min',
            videoUrl: "https://media.istockphoto.com/id/473002839/video/app-development-simple-diagram.mp4?s=mp4-640x640-is&k=20&c=KN2N_sEY7lDvbn9AwTO4--gI29VwHHu66VR2OoDjEkQ=",
            description: 'In this section, we will explore object-oriented programming concepts such as classes, objects, inheritance, and encapsulation. You will learn how to structure your code using these principles to create more modular and reusable components.',
            items: [
                { title: '9. Variable Scope', duration: '7min' },
                { title: '10. Conditionals', duration: '15min' },
                { title: '11. Loops (and an intro to the debugger!)', duration: '12min' }
            ]
        }
    ];

    const handleSelect = (videoData) => {
        if (videoData) {
            setCurrentVideo(videoData.videoUrl);
            setCurrentDescription(videoData.description);
        } else {
            setCurrentVideo(null);
            setCurrentDescription('');
            setActiveTab('Overview');
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row bg-gray-900 text-white">
                <div className="w-full md:w-1/4 bg-gray-800 p-4">
                    <div className="text-lg font-bold mb-4">Course content</div>
                    {sections.map((section, index) => (
                        <Section
                            key={index}
                            title={section.title}
                            duration={section.duration}
                            items={section.items}
                            videoUrl={section.videoUrl}
                            description={section.description}
                            onSelect={handleSelect} // Pass the function to set the current video and description
                        />
                    ))}
                </div>
                <div className="w-full md:w-3/4 p-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        {currentVideo && (
                            <video className="w-full h-[79.4vh] opacity-65" controlsList="nodownload" autoPlay controls muted loop>
                                <source src={currentVideo} type="video/mp4" />
                            </video>
                        )}
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-bold">Overview</div>
                            <div className="flex space-x-4">
                                <div>Notes</div>
                                <div>Announcements</div>
                                <div>Reviews</div>
                                <div>Learning tools</div>
                            </div>
                        </div>
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
                                <h1 className="text-2xl font-bold text-black mb-2">Learn to program! Let's walk through some simple examples and I'll explain everything along the way.</h1>
                                <div className="flex items-center mb-4 mt-4 flex-wrap">
                                    <div className='grid grid-rows-2'>
                                    <span className="ml-7 text-gray-700 flex flex-row gap-3 font-bold text-base">4.5 <FaStar className='mt-1' color='orange'/></span>
                                    <span className="ml-2 text-gray-500 text-sm">10,242 ratings</span>
                                    </div>
                                    <div className='grid grid-rows-2 ml-7'>
                                    <span className="ml-1 text-gray-700 font-bold text-base">165,194</span>
                                    <span className="ml-2 text-gray-500 text-sm">Students</span>
                                    </div>
                                    <div className='grid grid-rows-2 ml-7'>
                                    <span className="ml-1 text-gray-700 font-bold text-base">3 hours</span>
                                    <span className="ml-4 text-gray-500 text-sm">Total</span>
                                    </div>
                                </div>
                                <div className="items-center grid grid-rows-2 text-gray-700 mb-4 flex-wrap">
                                   
                                    <span className='flex flex-row gap-3 mb-3'>  <MdNewReleases size={20} className='mt-1' />Last updated October 2015</span>
                                    <span className='flex flex-row gap-3'> <FaGlobe size={18} className='mt-1' />English (English [Auto])</span>
                                    <span className="ml-2"></span>
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
            </div>
        </>
    );
};

export default Vid;