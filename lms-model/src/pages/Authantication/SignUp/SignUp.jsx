import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
axios.defaults.withCredentials = true;

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          name,
          email,
          password,
        }
      );

      console.log("Success:", response.data);

      setName("");
      setEmail("");
      setPassword("");

      // Redirect to home route after successful registration
      // navigate('/login');
    } catch (error) {
      // setError('There was an error!');
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="relative z-50 mix-blend-plus-darker"
      >
        <div className=" flex justify-center items-center h-screen">
          <div className=" bg-gray-900 px-10 py-10 rounded-xl ">
            <div className="">
              <h1 className="text-center text-white text-xl mb-4 font-bold">
                Signup
              </h1>
            </div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Name"
              />
            </div>

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Password"
              />
            </div>
            <div className=" flex justify-center mb-3">
              <button
                className=" bg-[#f23c2f] w-full text-white font-bold  px-2 py-2 rounded-lg"
                type="submit"
              >
                Signup
              </button>
            </div>
            <div>
              <h2 className="text-white">
                Have an account{" "}
                <Link className=" text-[#f23c2f] font-bold" to={"/login"}>
                  Login
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </form>
      <video
        className=" absolute inset-0 w-full h-full object-cover opacity-65"
        autoPlay
        muted
        loop
      >
        <source
          src="https://media.istockphoto.com/id/1232801314/video/couple-working-in-laptop-and-desktop-connected-online-for-covid19.mp4?s=mp4-640x640-is&k=20&c=Cgo_Jrfg-H73PAZ8Pg7uQcFcaTImp6qBhBIaruenST8="
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default SignUp;
