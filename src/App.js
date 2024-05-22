import { forwardRef, useRef, useReducer } from "react";
import Custom from "./Custom";
import UseMemoHook from "./UseMemoHook";
import UseCallbackHook from "./UseCallbackHook";
import UseContextHook from "./UseContextHook";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    default:
      return state;
  }
};

// todo = [{type:'add',name:"hello"}]
const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: state.length + 1, name: action.payload.name }];
    case "remove":
      console.log("payload", action.payload);

      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [todoState, todoDispatch] = useReducer(todoReducer, []);
  const todoRef = useRef();

  const handleDispatch = (isAdd, payload = {}) => {
    if (isAdd) {
      const name = todoRef.current.value;
      const disp = todoDispatch({ type: "add", payload: { name } });
      todoRef.current.value = "";
      return disp;
    }
    todoRef.current.value = payload.name;
    return todoDispatch({
      type: "remove",
      payload,
    });
  };
  // const inputRef = useRef();

  return (
    <div>
      {/* <Custom label="Name" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>focus</button>
      <UseMemoHook/>
      <UseCallbackHook/>
      <UseContextHook/> */}

      {/* usereducer hook */}
      {/* <h1>Count: {state.count}</h1>
      <button onClick={()=>dispatch({type:'increment',value:10})}>+</button>
      <button onClick={()=>dispatch({type:'decrement',value:5})}>-</button> */}
      {/* todoList */}
      <input type="text" ref={todoRef} />
      <button onClick={handleDispatch(true)}>+</button>
      {todoState.map((todo) => (
        <div key={todo.id}>
          {todo.name}{" "}
          <button
            onClick={handleDispatch(false, { id: todo.id, name: todo.name })}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
