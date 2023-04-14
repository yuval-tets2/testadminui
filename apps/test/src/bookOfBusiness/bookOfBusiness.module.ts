import { Module } from "@nestjs/common";
import { BookOfBusinessModuleBase } from "./base/bookOfBusiness.module.base";
import { BookOfBusinessService } from "./bookOfBusiness.service";
import { BookOfBusinessController } from "./bookOfBusiness.controller";
import { BookOfBusinessResolver } from "./bookOfBusiness.resolver";

@Module({
  imports: [BookOfBusinessModuleBase],
  controllers: [BookOfBusinessController],
  providers: [BookOfBusinessService, BookOfBusinessResolver],
  exports: [BookOfBusinessService],
})
export class BookOfBusinessModule {}
