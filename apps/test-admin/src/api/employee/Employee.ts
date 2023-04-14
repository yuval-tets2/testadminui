export type Employee = {
  createdAt: Date;
  employee?: Employee | null;
  employees?: Array<Employee>;
  id: string;
  updatedAt: Date;
};
