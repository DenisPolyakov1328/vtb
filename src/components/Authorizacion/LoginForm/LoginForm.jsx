import React, { useState } from "react";
import { useForm } from "react-hook-form";
import arrowImg from "./../../../assets/image/arrow.png";
import lock from "./../../../assets/image/lock.png";
import InputField from "./Fields/InputField";
import CheckboxField from "./Fields/CheckboxField";

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
      <InputField
        id="username"
        type="text"
        placeholder="Логин"
        error={errors.username}
        register={register}
        validation={{
          required: "Имя пользователя обязательно",
          minLength: {
            value: 3,
            message: "Имя пользователя должно быть не менее 3 символов",
          },
        }}
      />

      <InputField
        id="password"
        type="password"
        placeholder="Пароль"
        error={errors.password}
        register={register}
        validation={{
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
        }}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />

      <span className="block border-t w-full border-bdr-gray mb-[23px]"></span>

      <div className="flex flex-col gap-[12px] mb-[50px]">
        <CheckboxField
          id="agreeTerms"
          label="Принимаю"
          linkText="пользовательское соглашение"
          linkHref="#/"
          error={errors.agreeTerms}
          register={register}
          validation={{
            required: "Принятие пользовательского соглашения обязательно",
          }}
        />

        <CheckboxField
          id="receiveUpdates"
          label="Соглашаюсь на"
          linkText="обработку и передачу персональных данных"
          linkHref="#/"
          error={errors.receiveUpdates}
          register={register}
          validation={{
            required:
              "Соглашение на обработку и передачу персональных данных обязательно",
          }}
        />

        <CheckboxField
          id="ageConfirmation"
          label="Принимаю"
          linkText="политику обработки персональных данных"
          labelEnd="клиентов"
          linkHref="#/"
          error={errors.ageConfirmation}
          register={register}
          validation={{
            required:
              "Принятие политики обработки персональных данных клиентов обязательно",
          }}
        />
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
