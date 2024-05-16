import { forwardRef, useRef } from "react";
import Custom from "./Custom";
import UseMemoHook from "./UseMemoHook";
import UseCallbackHook from "./UseCallbackHook";
import UseContextHook from "./UseContextHook";


export default function App() {
  const inputRef = useRef();

  return (
    <div>
      <Custom label="Name" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>focus</button>
      {/* <UseMemoHook/>
      <UseCallbackHook/> */}
      <UseContextHook/>
    </div>
  );
}