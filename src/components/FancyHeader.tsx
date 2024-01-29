interface Props {
  text: string;
}

const FancyHeader: React.FC<Props> = ({ text }) => {
  return (
    <div className="relative flex justify-center items-center w-full mb-4">
      <div></div>
      <div className="text-3xl font-bold text-sky-600 drop-shadow-sm shadow-slate-50">
        {text}
      </div>
      <div></div>
      <div className="text-6xl text-black/5 font-bold absolute inset-0 flex justify-center items-center -z-10">
        <div className="bg-sky-600 h-2 rounded-full w-full"></div>
        <div className="flex-shrink-0 whitespace-nowrap">{text}</div>
        <div className="bg-sky-600 h-2 rounded-full w-full"></div>
      </div>
    </div>
  );
};

export default FancyHeader;
