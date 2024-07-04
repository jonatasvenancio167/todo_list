import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthService } from "App/Service/authService"

export default class AuthController {
  async login({ response, request, auth }: HttpContextContract) {
    const authService = new AuthService()

    const email = request.input('email')
    const password = request.input('password')

    const { status, data } = await authService.login({ auth, email, password })
    return response.status(status).json(data)
  }
}
