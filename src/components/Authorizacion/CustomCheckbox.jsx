import React from 'react';

const CustomCheckbox = ({ label, checked, onChange }) => {

  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <span
          className={`w-6 h-6 flex items-center justify-center border rounded-lg transition-all duration-200 ease-in-out ${
            checked ? 'bg-log-orange border-log-orange' : 'bg-gray-200 border-bdr-gray'
          }`}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </span>
        <span className="ml-2">{label}</span>
      </label>
    </>
  );
};

export default CustomCheckbox;
