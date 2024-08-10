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
    <div className="bg-no-repeat bg-cover" style={{backgroundImage: 'url("data:image/jpeg;base64,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")', 
    backgroundSize: 'fit' , backgroundPosition: 'center'}}>
    <form onSubmit={handleSubmit} method="post">
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
    </div>
  );
}

export default Login;
