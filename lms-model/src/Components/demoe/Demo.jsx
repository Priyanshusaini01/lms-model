import React,{useState} from 'react'

const Demo = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For example, you can send the form data to an API endpoint
    console.log('Form submitted:', { name, number, email, message });
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTAxLWcteF8xLWt6ZWc4MndpLmpwZw.jpg')] bg-cover bg-no-repeat lg:h-[80vh] xl:h-[53vh] lg:px-44 xl:px-60">
      <div className="md:w-1/2 px-6 lg:px-3 xl:px-44 mt-16">
        <h1 className="text-3xl lg:text-2xl xl:text-4xl font-bold mb-4 text-[#002f4c]">
          Employee and Team Training Solutions
        </h1>
        <p className="text-lg lg:text-lg xl:text-xl font-sans mt-10 lg:mt-14 xl:mt-14  mb-6">
          Curriculum tailored to your organization, delivered with white-glove
          service and support
        </p>

        <button
          className="bg-[#002f4c] hover:bg-[#f46f06] text-white lg:text-base xl:text-lg font-bold py-1 xl:px-6 lg:px-4 rounded-xl xl:h-12 xl:w-60 xl:mt-16 lg:mt-14 lg:h-10 lg:w-56 h-10 w-56 shadow-lg hover:shadow-gray-400"
          onClick={handleOpen}>
          Request A Free Demo
        </button>

      </div>
      
      <div className="md:w-1/2 px-7 xl:mt-14 lg:mt-14 mt-8 mb-12 xl:mb-0 lg:mb-0">
        <div className="bg-[url('https://files.123freevectors.com/wp-content/original/203264-abstract-orange-pink-and-white-blurred-gradient-mesh-background-illustrator.jpg?w=500&q=95')] bg-cover bg-no-repeat border border-white shadow-xl  rounded-md p-6 lg:h-[60vh] lg:w-[35vw]  xl:h-[40vh] xl:w-[28vw]">
          <h2 className="text-lg lg:text-base xl:text-2xl font-semibold xl:mb-16 lg:mb-16 mb-8 text-[#002f4c] ">
            Supporting Enterprises Around the Globe
          </h2>

          <div className="flex flex-col items-center xl:gap-7 lg:gap-7 gap-3">
            <div className="bg-white rounded-lg  p-2 text-white font-bold text-xl border border-black shadow-2xl ">
              <img
                src="https://taskcraft.in/static/media/TaskCraft_logo.841575346d8205e65592.png"
                alt="taskCraft"
                className="xl:w-56 xl:h-7 lg:mb-2 xl:mb-2 xl:mt-2 lg:mt-3 lg:h-5 lg:w-44 h-7 w-52 mb-1"
              />
            </div>

            <div className="bg-black rounded-lg p-2 text-orange-500 font-bold text-xl border border-white shadow-2xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D3DAQHxJqX8bWgahg/image-scale_127_750/image-scale_127_750/0/1687352383417/poolstack_technologies_pvt_ltd_cover?e=2147483647&v=beta&t=rP9L16kcRlygEh2K_1wEk9nNKyuswV1Vfa9yJfujHjk"
                alt="Poolstack"
                className="xl:w-56 xl:h-7 lg:mb-2 xl:mb-2 xl:mt-2 lg:mt-3 lg:h-5 lg:w-44  h-7 w-52 mb-1"
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex
          justify-center items-center">
          
          <div className="bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTAxLWcteF8xLWt6ZWc4MndpLmpwZw.jpg')] bg-cover bg-no-repeat hover:shadow-2xl shadow-md mx-auto p-8 w-[80vw] lg:w-[50vw] xl:w-[30vw] mt-7 mb-9">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 xl:h-40 lg:h-24 resize-none focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="bg-[#002f4c] hover:bg-[#f46f06] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              SEND
            </button>
          </form>
        </div>
        </div>
      )}
    </div>
  )
}

export default Demo
