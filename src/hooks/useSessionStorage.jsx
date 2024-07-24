import React, { useState, useEffect } from "react";

const useSessionStorage = (key, initialValue) => {
  const [localState, setLocalState] = useState(() => {
    const localData = sessionStorage.getItem(key);
    return localData || initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, localState);
  }, [localState]);
  return [localState, setLocalState];
};

export default useSessionStorage;
