import { JsonValue } from "type-fest";

export type User = {
  created: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updated: Date;
  username: string;
};
