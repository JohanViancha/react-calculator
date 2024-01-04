import './App.css';
import Display from './components/Display/Display';
import Button from './components/Button/Button';

import { keys } from './keys';

function App() {
  return (
    <div className='calculator'>
      <Display />
      <section className='grid-button'>
        {keys.map((key) => (
          <Button
            key={key.value}
            text={key.value}
            value={key.name}
          ></Button>
        ))}
      </section>
    </div>
  );
}

export default App;
