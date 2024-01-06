import './Display.css';

const Display = ({ text }) => {
  return (
    <input
      id='display'
      className='display'
      value={text}
      readOnly
    />
  );
};

export default Display;
