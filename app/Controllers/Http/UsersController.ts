// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { UserService } from "App/Service/userService";
import { BaseController } from "./BaseController";
import CreateUserValidator from "App/Validators/UserValidator";

export default class Userscontroller extends BaseController {
  constructor() {
    super({
      service: UserService,
      validator: {
        create: CreateUserValidator,
        update: CreateUserValidator,
      },
    })
  }
}
