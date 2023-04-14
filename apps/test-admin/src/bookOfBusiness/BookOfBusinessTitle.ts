import { BookOfBusiness as TBookOfBusiness } from "../api/bookOfBusiness/BookOfBusiness";

export const BOOKOFBUSINESS_TITLE_FIELD = "name";

export const BookOfBusinessTitle = (record: TBookOfBusiness): string => {
  return record.name || String(record.id);
};
