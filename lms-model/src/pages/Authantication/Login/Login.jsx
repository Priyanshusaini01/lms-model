import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
    });


      console.log("Success:", response.data);

      setEmail("");
      setPassword("");

      navigate("/");
      window.location.reload(false)
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="">
    <form onSubmit={handleSubmit} method="post" className="relative z-50 mix-blend-plus-darker">
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Login
            </h1>
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
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg" type="submit"
            >
              Login
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Don't have an account{" "}
              <Link className=" text-yellow-500 font-bold" to={"/signup"}>
                Signup
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </form>
    <video className=" absolute inset-0 w-full h-full object-cover opacity-65" autoPlay muted loop>
          <source src="https://media.istockphoto.com/id/1372667687/video/two-people-explaining-digital-marketing-strategy.mp4?s=mp4-640x640-is&k=20&c=XxDaEUIMun9dm0IT9ASUymPIP_o0x71obSi0d0yZunE=" type="video/mp4" />
          
        </video>
    </div>
  );
}

export default Login;
