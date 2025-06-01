import React from 'react';

const IconButton = ({ label, onClick }) => {
  return (
    <button
      className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-mono text-black dark:text-white p-6 rounded-2xl transition duration-200 text-xl"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default IconButton;