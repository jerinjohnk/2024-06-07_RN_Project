import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';

export default function StatesDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        // setCount(count + 1);
        setCount(prevState => prevState + 1); // asynchronous
      }}
    />
  );
}
