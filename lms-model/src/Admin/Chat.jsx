import React, { useState } from 'react'
import { FaSearch, FaPhone, FaVideo, FaEllipsisV, FaPaperclip, FaSmile, FaMicrophone, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Chat = () => {

    const [lectures, setLectures] = useState([
        { name: 'Mr. Niruban', time: 'Today, 9.52pm' },
        { name: 'Mr. Sam', time: 'Yesterday, 12.31pm' },
        { name: 'Mr. Nirmal', time: 'Wednesday, 9.12am' }
      ]);
    
      const [chats, setChats] = useState([
        {
          name: 'Anil',
          messages: [
            { sender: 'Anil', text: 'Hey There!', time: 'Today, 8.30pm' },
            { sender: 'Anil', text: 'How are you?', time: 'Today, 8.30pm' },
            { sender: 'User', text: 'Hello!', time: 'Today, 8.33pm' },
            { sender: 'User', text: 'I am fine and how are you', time: 'Today, 8.34pm' },
            { sender: 'Anil', text: 'I am doing well, Can we meet', time: 'Today, 8.36pm' },
            { sender: 'User', text: 'Yes Sure!', time: 'Today, 8.58pm' }
          ]
        },
        {
          name: 'Chuuthiya',
          messages: [
            { sender: 'Chuuthiya', text: 'Hello!', time: 'Today, 12.11pm' },
            { sender: 'User', text: 'Hi!', time: 'Today, 12.12pm' }
          ]
        },
        {
          name: 'Mary',
          messages: [
            { sender: 'Mary', text: 'You have to report it...', time: 'Today, 2.40pm' },
            { sender: 'User', text: 'Okay, I will.', time: 'Today, 2.41pm' }
          ]
        },
        {
          name: 'Bill Gates',
          messages: [
            { sender: 'Bill Gates', text: 'Nevermind bro', time: 'Yesterday, 12.31pm' },
            { sender: 'User', text: 'Alright.', time: 'Yesterday, 12.32pm' }
          ]
        },
        {
          name: 'Victoria H',
          messages: [
            { sender: 'Victoria H', text: 'Okay, brother. let\'s see...', time: 'Wednesday, 11.12am' },
            { sender: 'User', text: 'Sure.', time: 'Wednesday, 11.13am' }
          ]
        }
      ]);
    
      const [selectedChat, setSelectedChat] = useState(null);
      const [selectedLecture, setSelectedLecture] = useState(null);
      const [input, setInput] = useState('');
    
      const handleSend = () => {
        if (input.trim() !== '' && selectedChat !== null) {
          const newMessage = { sender: 'User', text: input, time: new Date().toLocaleTimeString() };
          const updatedChats = [...chats];
          updatedChats[selectedChat].messages.push(newMessage);
          setChats(updatedChats);
          setInput('');
        }
      };
    
      const handleCall = (name) => {
        alert(`Calling ${name}...`);
      };
    
      const handleVideoCall = (name) => {
        alert(`Starting video call with ${name}...`);
      };
    

  return (

    <div className="flex h-screen">
            <div className="w-1/4 bg-white p-4 border-r border-gray-200">
                <h1 className="text-2xl font-bold mb-4">Forum</h1>
                <div className="relative mb-4">
                    <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded" />
                    <FaSearch className="absolute right-3 top-3 text-gray-400" />
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Lectures</h2>
                    {lectures.map((lecture, index) => (
                        <div key={index} className="flex items-center mb-2 cursor-pointer" onClick={() => { setSelectedLecture(index); setSelectedChat(null); }}>
                            <img src="https://placehold.co/30x30" alt={lecture.name} className="w-8 h-8 rounded-full mr-2" />
                            <div>
                                <p className="font-semibold">{lecture.name}</p>
                                <p className="text-sm text-gray-500">{lecture.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Students</h2>
                    {chats.map((chat, index) => (
                        <div key={index} className="flex items-center mb-2 cursor-pointer" onClick={() => { setSelectedChat(index); setSelectedLecture(null); }}>
                            <img src="https://placehold.co/30x30" alt={chat.name} className="w-8 h-8 rounded-full mr-2" />
                            <div>
                                <p className="font-semibold">{chat.name}</p>
                                <p className="text-sm text-gray-500">{chat.messages[chat.messages.length - 1].text}</p>
                                <p className="text-sm text-gray-500">{chat.messages[chat.messages.length - 1].time}</p>
                            </div>
                            {chat.name === 'Anil' && <FaCheckCircle className="text-purple-500 ml-auto" />}
                            {chat.name === 'Chuuthiya' && <FaExclamationCircle className="text-red-500 ml-auto" />}
                            {chat.name === 'Mary' && <FaExclamationCircle className="text-red-500 ml-auto" />}
                            {chat.name === 'Bill Gates' && <FaExclamationCircle className="text-red-500 ml-auto" />}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-3/4 bg-white p-4">
                {selectedLecture !== null ? (
                    <>
                        <div className="flex items-center mb-4">
                            <img src="https://placehold.co/40x40" alt={lectures[selectedLecture].name} className="w-10 h-10 rounded-full mr-2" />
                            <div>
                                <p className="font-semibold">{lectures[selectedLecture].name}</p>
                                <p className="text-sm text-gray-500">{lectures[selectedLecture].time}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500">Lecture details and content will be displayed here.</p>
                        </div>
                    </>
                ) : selectedChat !== null ? (
                    <>
                        <div className="flex items-center mb-4">
                            <img src="https://placehold.co/40x40" alt={chats[selectedChat].name} className="w-10 h-10 rounded-full mr-2" />
                            <div>
                                <p className="font-semibold">{chats[selectedChat].name}</p>
                                <p className="text-sm text-gray-500">Online - Last seen, 2.02pm</p>
                            </div>
                            <div className="ml-auto flex items-center space-x-4">
                                <FaPhone className="text-purple-500 cursor-pointer" onClick={() => handleCall(chats[selectedChat].name)} />
                                <FaVideo className="text-purple-500 cursor-pointer" onClick={() => handleVideoCall(chats[selectedChat].name)} />
                                <FaEllipsisV className="text-purple-500" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            {chats[selectedChat].messages.map((message, index) => (
                                <div key={index} className={`flex items-${message.sender === 'User' ? 'end justify-end' : 'start'}`}>
                                    {message.sender !== 'User' && <img src="https://placehold.co/30x30" alt={message.sender} className="w-8 h-8 rounded-full mr-2" />}
                                    <div className={`p-2 rounded-lg ${message.sender === 'User' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}>
                                        <p>{message.text}</p>
                                        <p className="text-xs text-gray-500">{message.time}</p>
                                    </div>
                                    {message.sender === 'User' && <img src="https://placehold.co/30x30" alt="User" className="w-8 h-8 rounded-full ml-2" />}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-4 p-2 border-t border-gray-200">
                            <input
                                type="text"
                                placeholder="Type your message here..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <FaPaperclip className="text-gray-500 ml-2" />
                            <FaSmile className="text-gray-500 ml-2" />
                            <FaMicrophone className="text-gray-500 ml-2" />
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Select a chat or lecture to view details</p>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Chat
