import { ServerResponse } from "http";
import { Get, JsonController } from "routing-controllers";

@JsonController()
export class UserController {
  @Get("/users")
  getAll() {
    return { teste: "teste" };
  }
}
