import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const localStorageValue = localStorage.getItem(key);
  console.log("local storage func called");
  const [getlocalStorage, setLocalStorage] = useState(
    localStorageValue ? JSON.parse(localStorageValue) : null
  );
  useEffect(() => {
    if (localStorageValue) {
      setLocalStorage(JSON.parse(localStorageValue));
    } else {
      setLocalStorage(null);
    }
  }, [localStorageValue]);

  const setLocal = (value) => {
    //console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  // clear value in localStorage
  const clearLocalStorage = () => {
    localStorage.clear();
  };
  return [getlocalStorage, setLocal, clearLocalStorage];
};

export default useLocalStorage;
