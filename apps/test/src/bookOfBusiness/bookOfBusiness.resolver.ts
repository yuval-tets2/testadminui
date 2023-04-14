import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BookOfBusinessResolverBase } from "./base/bookOfBusiness.resolver.base";
import { BookOfBusiness } from "./base/BookOfBusiness";
import { BookOfBusinessService } from "./bookOfBusiness.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BookOfBusiness)
export class BookOfBusinessResolver extends BookOfBusinessResolverBase {
  constructor(
    protected readonly service: BookOfBusinessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
