import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  created?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updated?: SortOrder;
  username?: SortOrder;
};
