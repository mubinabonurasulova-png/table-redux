import React from "react";

function Button({ text, variant, onClick }) {
  let variants = {
    primary: "bg-gray-600 cursor-pointer rounded-2xl p-2.5 text-white",
    secondary: "bg-red-800 cursor-pointer rounded-2xl p-2.5 text-white",
  };
  return (
    <button className={variants[variant]} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
