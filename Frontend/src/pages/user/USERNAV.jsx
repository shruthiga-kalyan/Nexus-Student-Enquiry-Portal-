import  { useState, useEffect } from 'react';

const UserNavbar = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      });
      setCurrentDate(date);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-gray-300 py-4 px-6 flex justify-between items-center">
      <div className="text-white text-xl font-bold">user</div>
      <div className="text-black text-sm">{currentDate}</div>
    </nav>
  );
};

export default UserNavbar;
