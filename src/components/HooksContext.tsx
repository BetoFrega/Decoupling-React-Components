import { useGetRepositories } from "./data-hooks/UseGetRepositories";
import { useGetUser } from "./data-hooks/UseGetUser";
import React from "react";

export const HooksContext = React.createContext<{
  useGetUserData?: typeof useGetUser;
  useGetRepositories?: typeof useGetRepositories;
}>({});
