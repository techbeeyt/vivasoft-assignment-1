import React, { MouseEvent, useState } from "react";
import { GoChevronDown } from "react-icons/go";

interface Props {
  text: string;
  children?: React.ReactNode;
}

const DropDown: React.FC<Props> = ({ text, children }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const onClick = () => {
    setShowDropDown((prevState: boolean) => !prevState);
  };

  const dismissDropDown = (event: MouseEvent) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      setShowDropDown(false);
    }
  };
  return (
    <div
      className="group h-full _center hover:bg-gray-50 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative  _center gap-2 px-6">
        {text}
        <div
          className={`mt-1 ${
            showDropDown ? "rotate-180" : ""
          } transition-all ease-in duration-75`}
        >
          <GoChevronDown size={18} />
        </div>
      </div>

      <div
        className={`absolute left-0 top-20 bg-black/20 z-30 h-[100vh] w-full
        ${
          showDropDown
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
       transition-all ease-linear duration-100 cursor-default`}
        onClick={dismissDropDown}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDown;
