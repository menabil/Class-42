const Button = ({ btnText, className }) => {
  return (
    <button
      className={`mt-5 mr-3 py-3 px-5 text-white font-bold rounded-xl ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
