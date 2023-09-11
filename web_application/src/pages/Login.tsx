import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { trackLoginEvent } from '../utils/trackingUtils';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setChecked] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const history = useHistory();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login button clicked');

    if (!isChecked) {
      setMessage('Please check credentials');
      return;
    }

    if (username && password) {
      console.log('Attempting to track event');
      trackLoginEvent(username);

      setMessage('Event sent successfully');

      setUsername('');
      setPassword('');

      // Redirect to the home page if you want
      // history.push('/');
    } else {
      console.log('Username or password is empty');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main className="flex-grow flex bg-gray-100">
        <div className="hidden sm:block flex-1 bg-gray-100 flex flex-col justify-center mt-4">
          <div className="max-w-[400px] w-full mx-auto p-12">
            {/* <img
              className="mx-auto w-[400px] h-[100px] object-contain mb-8"
              src={logoImg}
              alt="Logo"
            /> */}
            <p className="break-words">
              Lorem Ipsum
            </p>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto p-12">
            <div className="mb-8 text-center">
              <h1 className="text-xl font-bold">Login</h1>
            </div>
            <div className="flex flex-col py-1">
              <input
                className="border p-1 rounded-xl"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-1">
              <input
                className="border p-1 rounded-xl"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <p className="flex items-center my-3 text-sm">
                <input
                  className="mr-1 h-4 w-4"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setChecked(!isChecked)}
                />
                Check Credentials
              </p>
            </div>

            <button
              className="border w-full my-3 py-1 rounded-xl bg-indigo-500 hover:bg-indigo-700 text-white"
              type="submit"
              onClick={handleLogin}
            >
              Sign In
            </button>

            {message && (
              <div
                className={`text-center mt-3 ${
                  isChecked ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
