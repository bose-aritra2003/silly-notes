'use client'; // Error components must be Client components

import {useEffect} from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({error, reset}: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={"px-20"}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
export default Error;