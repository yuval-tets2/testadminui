import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  created: Date;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  updated: Date;
  username: string;
};
