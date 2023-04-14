import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeCreateNestedManyWithoutEmployeesInput } from "./EmployeeCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  employees?: EmployeeCreateNestedManyWithoutEmployeesInput;
};
