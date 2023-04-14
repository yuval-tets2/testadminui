import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  created?: Date;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  updated?: Date;
  username?: string;
};
