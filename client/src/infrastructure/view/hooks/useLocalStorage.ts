import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  const isDataExist = JSON.parse(data!);

  const [value, setValue] = useState<any>(
    isDataExist ? isDataExist : defaultValue,
  );

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [key, value]);

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  return [value, setValue, remove];
};
