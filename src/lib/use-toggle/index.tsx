import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((): void => {
    setState((state) => !state);
    document.body.classList.toggle("hide__overflow__body");
  }, []);
  return [state, toggle];
};