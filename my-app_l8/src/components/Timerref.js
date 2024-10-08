import { useEffect, useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
};
export default RefExample;
