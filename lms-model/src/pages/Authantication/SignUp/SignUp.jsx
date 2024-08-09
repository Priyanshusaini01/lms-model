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
    <div className="bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/009/877/754/small/pixel-art-shopping-street-with-bakery-and-ice-cream-shop-retro-style-urban-landscape-cityscape-background-for-8bit-game-vector.jpg")', backgroundSize: 'cover' , backgroundPosition: 'center'}}>
      <form method="post" onSubmit={handleSubmit}>
        <div className=" flex justify-center items-center h-screen">
          <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
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
                className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
                type="submit"
              >
                Signup
              </button>
            </div>
            <div>
              <h2 className="text-white">
                Have an account{" "}
                <Link className=" text-red-500 font-bold" to={"/login"}>
                  Login
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
