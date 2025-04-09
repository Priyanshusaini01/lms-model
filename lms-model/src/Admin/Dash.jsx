import React from 'react'

const Dash = () => {
  return (
    <div className="flex h-screen">
      <aside className="bg-gray-800 text-white w-64 p-4">
        <div className="flex items-center mb-6">
          <i className="fas fa-bars text-xl mr-2"></i>
          <span className="text-2xl font-bold">LearnPlus</span>
        </div>
        <div className="mb-4">
          <input type="text" placeholder="Search" className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-user-graduate mr-2"></i> Student
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-chalkboard-teacher mr-2"></i> Instructor
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-6">
          <h3 className="text-gray-400 uppercase text-xs mb-2">Account</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-user mr-2"></i> Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-envelope mr-2"></i> Messages
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-gray-400 uppercase text-xs mb-2">Student</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-book-open mr-2"></i> Browse Courses
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-eye mr-2"></i> View Course
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-play-circle mr-2"></i> Take Course
                <span className="ml-auto bg-blue-500 text-xs px-2 py-1 rounded">PRO</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-pencil-alt mr-2"></i> Take a Quiz
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-chart-bar mr-2"></i> Quiz Results
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-folder-open mr-2"></i> My Courses
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-users mr-2"></i> Community
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-question-circle mr-2"></i> Get Help
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-sign-out-alt mr-2"></i> Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-gray-400 uppercase text-xs mb-2">Components</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-cubes mr-2"></i> Components
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-plug mr-2"></i> Plugins
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-gray-400 uppercase text-xs mb-2">Layout</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-expand mr-2"></i> Fluid Layout
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <i className="fas fa-compress mr-2"></i> Fixed Layout
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <nav className="text-sm text-gray-500">
              <a href="#" className="hover:underline">Home</a> / <span>Dashboard</span>
            </nav>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-blue-500 hover:underline mr-4">Forum</a>
            <a href="#" className="text-blue-500 hover:underline mr-4">Get Help</a>
            <div className="relative">
              <i className="fas fa-shopping-cart text-xl mr-4"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">2</span>
            </div>
            <div className="relative">
              <i className="fas fa-bell text-xl mr-4"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">1</span>
            </div>
            <img src="https://placehold.co/40x40" alt="            avatar" className="rounded-full w-10 h-10" />
          </div>
        </header>
        <div className="bg-white p-4 rounded shadow mb-6">
          <p>Your subscription ends on <strong>25 February 2015</strong></p>
          <button className="bg-green-500 text-white px-4 py-2 rounded ml-4">Upgrade</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">116</h2>
              <span className="text-gray-500">Popular Topics</span>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">Angular</h3>
              <img src="https://placehold.co/200x200" alt="Radar chart showing Angular as the best score" className="mx-auto" />
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">432</h2>
              <span className="text-gray-500">4 Days Streak This Week</span>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">Experience IQ</h3>
              <img src="https://placehold.co/200x100" alt="Line chart showing experience IQ over the week" className="mx-auto" />
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-4">Rewards</h3>
            <div className="flex justify-around">
              <i className="fas fa-medal text-2xl text-yellow-500"></i>
              <i className="fas fa-trophy text-2xl text-yellow-500"></i>
              <i className="fas fa-certificate text-2xl text-yellow-500"></i>
              <i className="fas fa-award text-2xl text-yellow-500"></i>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Courses</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">My courses</button>
            </div>
            <ul>
              <li className="flex items-center mb-4">
                <img src="https://placehold.co/40x40" alt="Course thumbnail" className="w-10 h-10 rounded mr-4" />
                <div>
                  <h4 className="font-bold">Learn Vue.js Fundamentals</h4>
                  <p className="text-gray-500 text-sm">22%</p>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <img src="https://placehold.co/40x40" alt="Course thumbnail" className="w-10 h-10 rounded mr-4" />
                <div>
                  <h4 className="font-bold">Angular in Steps</h4>
                  <p className="text-gray-500 text-sm">100%</p>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <img src="https://placehold.co/40x40" alt="Course thumbnail" className="w-10 h-10 rounded mr-4" />
                <div>
                  <h4 className="font-bold">Bootstrap Foundations</h4>
                  <p className="text-gray-500 text-sm">90%</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Quizzes</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Quiz results</button>
            </div>
            <ul>
              <li className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold">Title of quiz goes here?</h4>
                  <p className="text-gray-500 text-sm">Basics of HTML</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Good</p>
                  <p className="text-green-500">5.8</p>
                </div>
              </li>
              <li className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold">Directives & Routing</h4>
                  <p className="text-gray-500 text-sm">Angular in Steps</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Great</p>
                  <p className="text-green-500">9.8</p>
                </div>
              </li>
              <li className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold">Responsive & Retina</h4>
                  <p className="text-gray-500 text-sm">Bootstrap Foundations</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Failed</p>
                  <p className="text-red-500">2.8</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-4">Forum Activity</h3>
            <ul>
              <li className="flex items-center mb-4">
                <img src="https://placehold.co/40x40" alt="User avatar" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Luci Bryant</h4>
                  <p className="text-gray-500 text-sm">Am I learning the right way?</p>
                  <p className="text-gray-400 text-xs">5 min ago</p>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <img src="https://placehold.co/40x40" alt="User avatar" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Magnus Goldsmith</h4>
                  <p className="text-gray-500 text-sm">Can someone help me with the basic setup?</p>
                  <p className ="text-gray-400 text-xs">7 min ago</p>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <img src="https://placehold.co/40x40" alt="avatar" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Katelyn Rankin</h4>
                  <p className="text-gray-500 text-sm">I think this is the right way to go.</p>
                  <p className="text-gray-400 text-xs">12 min ago</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dash
