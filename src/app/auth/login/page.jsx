'use client';

import { useState, useCallback } from 'react';
import { login } from "../../../utility/auth"
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = useCallback((e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  }, []);

  const handleLogin = async () => {
    try {
      setError(null);

      const userInfo = await login(credentials);
      console.log('Logged in:', userInfo);

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error('Login error:', error);
      setError(`Error! ${error}`);
    }
  };

  return (
    <div className='flex flex-col items-center p-6'>
      <form>
        <div className=''>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;