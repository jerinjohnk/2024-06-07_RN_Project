import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';

export default function StatesDemo() {
  const [count, setCount] = useState(0);
  // const [something,setSomething] = useState(initialState)

  useEffect(() => {
    // The code we want to run
    console.log(count);

    //Optional return function
    // return () => {
    //   console.log('I am being cleaned up');
    // };
  }, [count]); // The dependency array

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
