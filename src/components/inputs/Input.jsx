import React from "react";
import { BiDollar } from "react-icons/bi";

const Input = ({
  id,
  label,
  type,
  disbaled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={20}
          className="absolute top-7 left-2 text-neutral-700"
        />
      )}
      <input
        id={id}
        disabled={disbaled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full px-4 p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
        ${formatPrice ? "pl-6" : "pl-4"} 
        ${errors[id] ? "border-rose-500" : "border-neutral-300"} ${
          errors[id] ? "focus:border-rose-500" : "focus:border-black"
        }
        `}
      />
      <label
        className={`absolute text-md duration-300 transform -translate-y-3 top-5 z-10 origin-[0] ${
          formatPrice ? "left-9" : "left-4"
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:scale-75 ${errors[id] ? 'text-rose-500': 'text-zinc-400'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
