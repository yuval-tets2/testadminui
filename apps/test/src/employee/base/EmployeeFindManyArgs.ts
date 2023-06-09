/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeWhereInput } from "./EmployeeWhereInput";
import { Type } from "class-transformer";
import { EmployeeOrderByInput } from "./EmployeeOrderByInput";

@ArgsType()
class EmployeeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmployeeWhereInput,
  })
  @Field(() => EmployeeWhereInput, { nullable: true })
  @Type(() => EmployeeWhereInput)
  where?: EmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: [EmployeeOrderByInput],
  })
  @Field(() => [EmployeeOrderByInput], { nullable: true })
  @Type(() => EmployeeOrderByInput)
  orderBy?: Array<EmployeeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EmployeeFindManyArgs as EmployeeFindManyArgs };
