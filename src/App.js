import { forwardRef, useRef } from "react";
import Custom from "./Custom";


export default function App() {
  const inputRef = useRef();

  return (
    <div>
      <Custom label="Name" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  );
}