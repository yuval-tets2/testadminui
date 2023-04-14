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
import { BookOfBusinessWhereInput } from "./BookOfBusinessWhereInput";
import { Type } from "class-transformer";
import { BookOfBusinessOrderByInput } from "./BookOfBusinessOrderByInput";

@ArgsType()
class BookOfBusinessFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BookOfBusinessWhereInput,
  })
  @Field(() => BookOfBusinessWhereInput, { nullable: true })
  @Type(() => BookOfBusinessWhereInput)
  where?: BookOfBusinessWhereInput;

  @ApiProperty({
    required: false,
    type: [BookOfBusinessOrderByInput],
  })
  @Field(() => [BookOfBusinessOrderByInput], { nullable: true })
  @Type(() => BookOfBusinessOrderByInput)
  orderBy?: Array<BookOfBusinessOrderByInput>;

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

export { BookOfBusinessFindManyArgs as BookOfBusinessFindManyArgs };
