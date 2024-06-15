import React from "react";
import clsx from "clsx";
import element from "./customCheck.module.css";

const CheckboxField = ({
  id,
  label,
  linkText,
  labelEnd,
  linkHref,
  error,
  register,
  validation,
}) => (
  <>
    <label className="flex items-baseline text-descr-blue relative">
      <input
        type="checkbox"
        className={clsx(
          "appearance-none absolute top-0.5 left-0 m-0 w-[23px] h-[23px] border rounded-lg bg-gray-200 border-bdr-gray transition-all checked:bg-log-orange checked:border-log-orange",
          element.element,
          {
            "border-red-error": error,
          }
        )}
        {...register(id, validation)}
      />
      <p className="ml-[35px]">
        {label}{" "}
        {linkText && (
          <a href={linkHref} className="text-indigo-600 underline">
            {linkText}
          </a>
        )}
        {" "}{labelEnd}
      </p>
    </label>
    {error && <p className="text-red-error">{error.message}</p>}
  </>
);

export default CheckboxField;
