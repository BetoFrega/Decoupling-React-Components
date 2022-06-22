import React, { useContext } from "react";
import { HooksContext } from "./HooksContext";

/**
 *
 * A component that uses React Contexts instead of props avoids prop drilling
 * but introduces a new problem: implicit dependencies.
 *
 * You should be careful to properly inform you fellow developers
 * when a component depends on being within a specific Context.
 * That can be achieved by throwing an error when a Context is not found,
 * by proper use of documentation comments, by logging warnings to the console, etc.
 *
 *
 */
export function ComponentUsingContext() {
  const hooksContext = useContext(HooksContext);
  if (!hooksContext) {
    console.warn("ComponentUsingContext should be within a HooksContext");
    // throw new Error("ComponentUsingContext should be within a HooksContext")
  }
  const { useGetUserData, useGetRepositories } = hooksContext;
  if (!useGetUserData) {
    console.warn("HooksContext should have a useGetUserData");
  }
  if (!useGetRepositories) {
    console.warn("HooksContext should have a useGetRepositories");
  }
  const repoData = useGetRepositories?.();
  return (
    <>
      {useGetUserData?.().name} has {repoData?.length} repositories
    </>
  );
}
