import { BookOfBusinessWhereInput } from "./BookOfBusinessWhereInput";
import { BookOfBusinessOrderByInput } from "./BookOfBusinessOrderByInput";

export type BookOfBusinessFindManyArgs = {
  where?: BookOfBusinessWhereInput;
  orderBy?: Array<BookOfBusinessOrderByInput>;
  skip?: number;
  take?: number;
};
