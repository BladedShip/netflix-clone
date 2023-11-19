import React from "react";

type Props = {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type: string;
};

const Input = (props: Props) => {
  return (
    <div className="relative">
      <input
        className="block rounded-md p-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" " // Note to self: Leave this empty please
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
      />
      <label
        htmlFor={props.id}
        className="absolute text-md text-zinc-500 duration-200 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {props.label}
      </label>
    </div>
  );
};

export default Input;
