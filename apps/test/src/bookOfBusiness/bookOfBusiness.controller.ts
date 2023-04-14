import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BookOfBusinessService } from "./bookOfBusiness.service";
import { BookOfBusinessControllerBase } from "./base/bookOfBusiness.controller.base";

@swagger.ApiTags("bookOfBusinesses")
@common.Controller("bookOfBusinesses")
export class BookOfBusinessController extends BookOfBusinessControllerBase {
  constructor(
    protected readonly service: BookOfBusinessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
