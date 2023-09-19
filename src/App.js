import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';
import './styles/global.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const [isRunning, setIsRunning] = useState(null);
  const [milliseconds, setMilliseconds] = useState(0);

  const startTimer = () => {
    console.log('started');
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setMilliseconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        // Increase the milliseconds value by 10 
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
      }, 10); // Interval every 10 milliseconds (browser doesn't handle 1millisecond)
    } else {
      clearInterval(intervalId);
    }

    // The effect will be cleared when the component is disabled or isRunning is changed
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);
  
  
  
  return (
    <Container>
        <Timer milliseconds={milliseconds}/>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
    </Container>
  );
};

export default App;
