import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateManyWithoutEmployeesInput } from "./EmployeeUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  employees?: EmployeeUpdateManyWithoutEmployeesInput;
};
