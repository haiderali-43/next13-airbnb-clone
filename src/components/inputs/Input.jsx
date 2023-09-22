import React from "react";
import { BiDollar } from "react-icons/bi";

const Input = ({
  id,
  label,
  type,
  disbaled,
  formatPrice,
  reqyired,
  register,
  errors,
}) => {
  return <div className="w-full relative">
    {formatPrice && (
        <BiDollar size={24} className="absolute top-5 left-2 text-neutral-700" />
    )}

  </div>;
};

export default Input;
