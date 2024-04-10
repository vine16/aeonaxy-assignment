import React from "react";

export default function NameLogo({ name }) {
  const firstLetter = name[0];
  return (
    <span className="inline-flex w-full h-full rounded-full border-solid justify-center items-center border-2 border-black font-black bg-gradient-to-l from-amber-200  to-amber-100 ">
      {firstLetter}
    </span>
  );
}
