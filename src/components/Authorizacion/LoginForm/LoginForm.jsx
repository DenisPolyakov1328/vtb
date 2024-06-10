import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import element from "./customCheck.module.css";
import arrowImg from "./../../../assets/image/arrow.png";
import lock from "./../../../assets/image/lock.png";
import clsx from "clsx";

// Пример объекта с именами пользователей и паролями
const users = {
  user1: "password123",
  user2: "securepass456",
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    reset,
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const { username, password } = data;

    if (users[username] && users[username] === password) {
      console.log("Вход выполнен успешно:", data);
      // Логика успешного входа
      reset(); // Очистка формы после успешного входа
    } else {
      setError("password", {
        type: "manual",
        message: "Неправильное имя пользователя или пароль",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[548px]">
      <div className="mb-[50px]">
        <input
          id="username"
          type="text"
          placeholder="Логин"
          className={clsx(
            "mt-1 placeholder:text-[18px] placeholder:text-descr-blue text-descr-blue block w-full px-[27.5px] py-[23px] border rounded-md shadow-sm focus:outline-none",
            {
              "border-red-error": errors.username,
              "border-bdr-gray": !errors.username,
            }
          )}
          {...register("username", {
            required: "Имя пользователя обязательно",
            minLength: {
              value: 3,
              message: "Имя пользователя должно быть не менее 3 символов",
            },
          })}
        />
        {errors.username && (
          <p className="mt-2 text-red-error">{errors.username.message}</p>
        )}
      </div>

      <div className="mb-[50px] relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Пароль"
          className={clsx(
            "mt-1 placeholder:text-[18px] placeholder:text-descr-blue text-descr-blue block w-full px-[27.5px] py-[23px] border rounded-md shadow-sm focus:outline-none",
            {
              "border-red-error": errors.password,
              "border-bdr-gray": !errors.password,
            }
          )}
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
            validate: (value) => {
              const username = getValues("username");
              if (!users[username] || users[username] !== value) {
                return "Неправильное имя пользователя или пароль";
              }
              return true;
            },
          })}
        />
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
        {errors.password && (
          <p className="mt-2 text-red-error">{errors.password.message}</p>
        )}
      </div>

      <span className="block border-t w-full border-bdr-gray mb-[23px]"></span>

      <div className="mb-3">
        <label className="flex items-baseline text-descr-blue relative">
          <input
            type="checkbox"
            className={clsx(
              "appearance-none absolute top-0.5 left-0 m-0 w-[23px] h-[23px] border rounded-lg bg-gray-200 border-bdr-gray transition-all checked:bg-log-orange checked:border-log-orange",
              element.element,
              {
                'border-red-error': errors?.agreeTerms?.message,
              }
            )}
            {...register("agreeTerms", {
              required: "Принятие пользовательского соглашения обязательно",
            })}
          />
          <p className="ml-[35px]">
            Принимаю{" "}
            <a href="#/" className="text-indigo-600 underline">
              пользовательское соглашение
            </a>
          </p>
        </label>
        {errors.agreeTerms && (
          <p className="mt-2 text-red-error">{errors.agreeTerms.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="flex items-baseline text-descr-blue relative">
          <input
            type="checkbox"
            className={clsx(
              "appearance-none absolute top-0.5 left-0 m-0 w-[23px] h-[23px] border rounded-lg bg-gray-200 border-bdr-gray transition-all checked:bg-log-orange checked:border-log-orange",
              element.element,
              {
                'border-red-error': errors?.receiveUpdates?.message,
              }
            )}
            {...register("receiveUpdates", {
              required:
                "Соглашение на обработку и передачу персональных данных обязательно",
            })}
          />
          <p className="ml-[35px]">
            Соглашаюсь на{" "}
            <a href="#/" className="text-indigo-600 underline">
              обработку и передачу персональных данных
            </a>
          </p>
        </label>
        {errors.receiveUpdates && (
          <p className="mt-2 text-red-error">{errors.receiveUpdates.message}</p>
        )}
      </div>

      <div className="mb-[50px]">
        <label className="flex items-baseline text-descr-blue relative">
          <input
            type="checkbox"
            className={clsx(
              "appearance-none absolute top-0.5 left-0 m-0 w-[23px] h-[23px] border rounded-lg bg-gray-200 border-bdr-gray transition-all checked:bg-log-orange checked:border-log-orange",
              element.element,
              {
                'border-red-error': errors?.ageConfirmation?.message,
              }
            )}
            {...register("ageConfirmation", {
              required:
                "Принятие политики обработки персональных данных клиентов обязательно",
            })}
          />
          <p className="ml-[35px]">
            Принимаю{" "}
            <a href="#/" className="text-indigo-600 underline">
              политику обработки персональных данных
            </a>{" "}
            клиентов
          </p>
        </label>
        {errors.ageConfirmation && (
          <p className="mt-2 text-red-error">
            {errors.ageConfirmation.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full p-[34px] flex justify-between items-center text-white font-medium rounded-lg bg-log-orange focus:outline-none disabled:bg-btn-gray disabled:cursor-not-allowed"
        disabled={!isValid}
      >
        Продолжить
        <img src={arrowImg} alt="arrow" />
      </button>
      <div className="flex items-start mt-[25px]">
        <img src={lock} alt="lock" className="pt-[3px]" />
        <p className="ml-[15px] text-descr-blue">
          Используем шифрование для гарантии безопасности персональных данных
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
