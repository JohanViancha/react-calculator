import './Button.css';

const Button = ({ text, value }) => {
  return (
    <button
      className={`key-${value}`}
      id={value}
    >
      {text}
    </button>
  );
};

export default Button;
