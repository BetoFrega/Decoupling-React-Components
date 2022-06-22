import { useGetUser } from "./data-hooks/UseGetUser";
import { useGetRepositories } from "./data-hooks/UseGetRepositories";
import React from "react";

/**
 * Naive implementation directly importing the hooks.
 * Please avoid this and use props or context instead.
 */
export function NaiveComponent() {
  const userData = useGetUser();
  const repoData = useGetRepositories();

  return (
    <>
      {userData?.name} has {repoData?.length} repositories
    </>
  );
}
