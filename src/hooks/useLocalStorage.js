import { useEffect, useState } from "react";

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing messages
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const onStorageCalled = (e) => {
    const { newValue } = e;
    setValue(JSON.parse(newValue));
  };
  useEffect(() => {
    window.addEventListener("storage", onStorageCalled);

    return () => {
      window.removeEventListener("storage", onStorageCalled);
    };
  }, []);

  return [value, setValue];
};
