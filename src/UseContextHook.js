import { createContext, useContext, useState } from "react";
import UseContext1 from "./UseContext1";

export const UserContext = createContext();
export default function UseContextHook() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <UseContext1 />
      </UserContext.Provider>
    </>
  );
}
