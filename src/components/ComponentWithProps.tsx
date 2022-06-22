import React from "react";

/**
 *
 * Components that use props instead of directly importing things are more decoupled but can lead to prop drilling.
 *
 * You might want to use React Contexts to avoid prop drilling.
 *
 */
export function ComponentWithProps({
  userData,
  repoData,
}: {
  userData: { name: string };
  repoData: unknown[];
}) {
  return (
    <>
      {userData?.name} has {repoData?.length} repositories
    </>
  );
}
