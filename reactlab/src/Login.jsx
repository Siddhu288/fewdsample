import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const predefinedCredentials = {
    username: 'student',
    password: 'kmit123'
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      form.username === predefinedCredentials.username &&
      form.password === predefinedCredentials.password
    ) {
      setIsLoggedIn(true);
      setError('');
      localStorage.setItem('isLoggedIn', 'true'); // optional persistence
    } else {
      setError('Invalid credentials');
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    setForm({ username: '', password: '' });
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-gray-100 rounded shadow">
      {isLoggedIn ? (
        <>
          <h2 className="text-xl font-bold mb-4">Welcome, {form.username}!</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <h2 className="text-xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-2">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
