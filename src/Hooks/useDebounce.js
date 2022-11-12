import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeOutID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
