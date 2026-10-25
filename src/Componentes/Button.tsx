type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

//const default = w-full border-2 border-[#C92A0E] cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm font-bold text-white
//const outline = w-full border-2 border-[#C92A0E] cursor-pointer rounded-md bg-white-500 py-2 text-sm font-bold text-[#C92A0E]
const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full border-2 border-blue-900 cursor-pointer rounded-md bg-blue-500 py-2 text-sm font-bold text-white";
    } else if (variant === "outline") {
      return "w-full border-2 border-blue-900 cursor-pointer rounded-md bg-white-500 py-2 text-sm font-bold text-blue-900";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
