import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  const isDataExist = JSON.parse(data!);

  const [value, setValue] = useState<any>(
    isDataExist ? isDataExist : defaultValue,
  );

  console.log(value);

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [key, value]);

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  return [value, setValue, remove];
};

export const setDataInLocalStorage = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataInLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeDataInLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
