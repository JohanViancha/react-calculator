import { useState } from 'react';
import { evaluate } from 'mathjs';

const useOperation = () => {
  const [text, setText] = useState('0');
  const [number, setNumber] = useState('');
  const operation = ['+', '-', '/', '*'];

  const handleConsecutiveOperation = () => {
    return text.split('').reduce((prev, current, index, array) => {
      if (
        operation.includes(prev[prev.length - 1]) &&
        operation.includes(current) &&
        operation.includes(array[index + 1])
      ) {
        console.log(prev[0]);
        return prev[0];
      }
      return `${prev}${current}`;
    }, '');
  };

  const changeText = (inputText) => {
    if (number.includes('.') && inputText === '.') {
      return;
    }

    if (inputText === 'AC') {
      setText('0');
      setNumber('');

      return;
    }

    if (inputText === '0' && text[0] === '0') {
      setText('0');
      return;
    }

    if (inputText !== '0' && text[0] === '0') {
      setText(inputText);
      setNumber(inputText);
      return;
    }

    setText(`${text}${inputText}`);
    setNumber(`${number}${inputText}`);

    if (operation.includes(inputText)) {
      setNumber('');
    }

    if (inputText === '=') {
      setText(evaluate(handleConsecutiveOperation()));
    }
  };

  return [text, changeText];
};

export { useOperation };
