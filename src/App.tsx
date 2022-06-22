import React from "react";
import { NaiveComponent } from "./components/NaiveComponent";
import { ComponentWithProps } from "./components/ComponentWithProps";
import { useGetUser } from "./components/data-hooks/UseGetUser";
import { ComponentUsingContext } from "./components/ComponentUsingContext";
import { HooksContext } from "./components/HooksContext";
import { useGetRepositories } from "./components/data-hooks/UseGetRepositories";

function App() {
  return (
    <>
      Naive implementation: <NaiveComponent />
      With props:{" "}
      <ComponentWithProps
        userData={useGetUser()}
        repoData={useGetRepositories()}
      />
      With context:{" "}
      <HooksContext.Provider
        value={{
          useGetUserData: useGetUser,
          useGetRepositories,
        }}
      >
        <ComponentUsingContext />
      </HooksContext.Provider>
    </>
  );
}

export default App;
