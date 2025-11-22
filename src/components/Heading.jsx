const Hello = () => {
  return <h2>Welcome</h2>;
};

const One = ({ text, className }) => {
  return <h3 className={className}>{text}</h3>;
};

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
