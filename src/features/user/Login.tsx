import React, { useEffect, useState } from "react";
import VisitUs from "../../UI/components/VisitUs";
import Button from "../../UI/components/Button";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginEmail, setLoginEmail] = useState<string>("emma@example.com");
  const [loginPassword, setLoginPassword] = useState<string>("123456");
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  function handleLogin(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (loginEmail && loginPassword) login(loginEmail, loginPassword);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/menu", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className="text-[18px] py-20">
        <h2 className="text-center text-3xl pb-10">Login</h2>
        <form
          className="max-w-lg mx-auto p-6 rounded-xl  space-y-4"
          onSubmit={handleLogin}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-center mt-[50px]">
            <Button width="300px">Login</Button>
          </div>
        </form>
      </div>
      <VisitUs />
    </>
  );
}

export default Login;
