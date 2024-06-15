import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InputField = ({
  id,
  type = 'text',
  placeholder,
  error,
  register,
  validation,
  showPassword,
  togglePasswordVisibility
}) => (
  <div className="mb-[50px] relative">
    <input
      id={id}
      type={type === 'password' && showPassword ? 'text' : type}
      placeholder={placeholder}
      className={clsx(
        'mt-1 placeholder:text-[18px] placeholder:text-descr-blue text-descr-blue block w-full px-[27.5px] py-[23px] border rounded-md shadow-sm focus:outline-none',
        {
          'border-red-error': error,
          'border-bdr-gray': !error
        }
      )}
      {...register(id, validation)}
    />
    {type === 'password' && (
      <button
        type="button"
        className="absolute top-[13px] right-[18px] px-3 py-3 text-gray-600 focus:outline-none"
        onClick={togglePasswordVisibility}
      >
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          color="gray"
        />
      </button>
    )}
    {error && <p className="mt-2 text-red-error">{error.message}</p>}
  </div>
);

export default InputField;
