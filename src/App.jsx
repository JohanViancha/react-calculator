import './App.css';
import Button from './components/Button/Button';
import Display from './components/Display/Display';

import { keys } from './keys';
import { useOperation } from './customHooks/useOperation';

function App() {
  const [text, setText] = useOperation();

  const onClick = (e) => {
    const inputText = e.target.innerText;
    setText(inputText);
  };
  return (
    <div className='calculator'>
      <Display
        text={text}
      />
      <section className='grid-button'>
        {keys.map((key) => (
          <Button
            key={key.value}
            text={key.value}
            value={key.name}
            onClick={onClick}
          ></Button>
        ))}
      </section>
    </div>
  );
}

export default App;
