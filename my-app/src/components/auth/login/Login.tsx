import { useState } from "react";
import { login } from "../../../auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await login(email, password);
        navigate("/");
      } catch (error) {
        setErrorMessage("Errore di login. Controlla le credenziali.");
        console.error("Errore di login:", error);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl bg-white">
        <div className="text-center">
          <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm text-gray-600 font-bold">Email</label>
            <input
              type="email"
              autoComplete='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 font-bold">Password</label>
            <input
              type="password"
              autoComplete='current-password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            />
          </div>
          {errorMessage && (
            <span className='text-red-600 font-bold'>{errorMessage}</span>
          )}
          <button
            type="submit"
            disabled={isSigningIn}
            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
          >
            {isSigningIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <p className="text-center text-sm">Don't have an account? <a href="/register" className="hover:underline font-bold">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
