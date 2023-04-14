import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeListRelationFilter } from "./EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
};
