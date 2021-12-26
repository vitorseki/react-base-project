import { useReduxDispatch } from 'hooks/useReduxDispatch';
import { useReduxSelector } from 'hooks/useReduxSelector';
import { incrementCounter, randomIncrementCounter } from 'store/slices/counter';

export default function About() {
  const dispatch = useReduxDispatch();

  const increment = () => dispatch(incrementCounter());

  const randomIncrement = () => dispatch(randomIncrementCounter(2));

  const counter = useReduxSelector((state) => state.counter.value);

  return (
    <div>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={randomIncrement}>
        Random Increment
      </button>
      {counter}
    </div>
  );
}
