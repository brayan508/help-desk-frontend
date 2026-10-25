const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-800 p-2 text-white transition outline-none focus:border-blue-500"
      //w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-800 p-2 text-white transition outline-none focus:border-blue-500
    />
  );
};

export default Input;

