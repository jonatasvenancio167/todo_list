import User from "App/Models/User"
import { BaseServices } from "./baseService"

class UserService extends BaseServices{
  constructor() {
    super({ model: User, name_model: 'users' })
    this.Model = User
  }
}

export { UserService }