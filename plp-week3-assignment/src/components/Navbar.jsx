import React from 'react';
import { useTheme } from '../context/ThemeContext'; // ✅ Import the theme context

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme(); // ✅ Use the context

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Derrick: PLP Task Manager
          </h1>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
