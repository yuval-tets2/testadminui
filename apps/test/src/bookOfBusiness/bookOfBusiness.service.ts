import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BookOfBusinessServiceBase } from "./base/bookOfBusiness.service.base";

@Injectable()
export class BookOfBusinessService extends BookOfBusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
