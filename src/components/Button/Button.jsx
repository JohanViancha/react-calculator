import './Button.css';

const Button = ({ text, value, onClick }) => {
  return (
    <button
      className={`button key-${value}`}
      id={value}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
