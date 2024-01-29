import React from "react";
interface Props {
  text: string;
}
const Technology: React.FC<Props> = ({ text }) => {
  return (
    <button className="text-gray-100 border border-gray-500 bg-gray-600 px-4 py-px rounded-full _center">
      {text}
    </button>
  );
};

export default Technology;
