import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import CustomCheckbox from './CustomCheckbox';

// Пример объекта с именами пользователей и паролями
const users = {
  user1: 'password123',
  user2: 'securepass456'
};

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, setError, getValues, reset, watch } = useForm({
    mode: 'onChange'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = data => {
    const { username, password } = data;
    
    if (users[username] && users[username] === password) {
      console.log('Вход выполнен успешно:', data);
      // Логика успешного входа
      reset(); // Очистка формы после успешного входа
    } else {
      setError('password', {
        type: 'manual',
        message: 'Неправильное имя пользователя или пароль'
      });
    }
  };

  // Слежение за изменениями в полях формы
  const watchFields = watch(['username', 'password', 'agreeTerms', 'receiveUpdates', 'ageConfirmation']);

  useEffect(() => {
    // Проверка на заполненность всех обязательных полей
    setIsFormValid(
      watchFields.every(field => field)
    );
  }, [watchFields]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <input
          id="username"
          type="text"
          placeholder="Логин"
          className={`mt-1 placeholder:text-descr-blue text-descr-blue block w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-bdr-gray'} rounded-md shadow-sm focus:outline-none sm:text-sm`}
          {...register('username', { 
            required: 'Имя пользователя обязательно',
            minLength: {
              value: 3,
              message: 'Имя пользователя должно быть не менее 3 символов'
            }
          })}
        />
        {errors.username && <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>}
      </div>
      
      <div className="mb-4 relative">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Пароль"
          className={`mt-1 placeholder:text-descr-blue text-descr-blue block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-bdr-gray'} rounded-md shadow-sm focus:outline-none sm:text-sm`}
          {...register('password', {
            required: 'Пароль обязателен',
            minLength: {
              value: 6,
              message: 'Пароль должен быть не менее 6 символов'
            },
            validate: (value) => {
              const username = getValues('username');
              if (!users[username] || users[username] !== value) {
                return 'Неправильное имя пользователя или пароль';
              }
              return true;
            }
          })}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} color='gray' />
        </button>
        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
      </div>

      <div className="mb-4">
        <label className="flex items-baseline text-descr-blue">
          <input
            type="checkbox"
            className="mr-2"
            {...register('agreeTerms', { required: 'Принятие пользовательского соглашения обязательно' })}
          />
          <p>
            Принимаю <a href="#/" className="text-indigo-600 underline">пользовательское соглашение</a>
          </p>
        </label>
        {errors.agreeTerms && <p className="mt-2 text-sm text-red-600">{errors.agreeTerms.message}</p>}
      </div>

      <div className="mb-4">
        <label className="flex items-baseline text-descr-blue">
          <input
            type="checkbox"
            className="mr-2"
            {...register('receiveUpdates', { required: 'Соглашение на обработку и передачу персональных данных обязательно' })}
          />
          <p>
            Соглашаюсь на <a href="#/" className="text-indigo-600 underline">обработку и передачу персональных данных</a>
          </p>
        </label>
        {errors.receiveUpdates && <p className="mt-2 text-sm text-red-600">{errors.receiveUpdates.message}</p>}
      </div>

      <div className="mb-4">
        <label className="flex items-baseline text-descr-blue">
          <input
            type="checkbox"
            className="mr-2"
            {...register('ageConfirmation', { required: 'Принятие политики обработки персональных данных клиентов обязательно' })}
          />
          <p>
            Принимаю <a href="#/" className="text-indigo-600 underline">политику обработки персональных данных</a> клиентов
          </p>
        </label>
        {errors.ageConfirmation && <p className="mt-2 text-sm text-red-600">{errors.ageConfirmation.message}</p>}
      </div>
      
      <button
        type="submit"
        className="w-full px-4 py-2 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!isFormValid}
      >
        Войти
      </button>

      <div className="p-4">
        <CustomCheckbox
          label="Выбери меня"
          name="terms"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
    </div>
    </form>
  );
};

export default LoginForm;
