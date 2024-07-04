import User from "App/Models/User"
import Hash from '@ioc:Adonis/Core/Hash'
import { ResponseProps } from "App/Interface"
import { AuthProps } from "App/Interface/AuthProps"
import UnAuthorizedException from "App/Exceptions/UnAuthorizedException"

class AuthService {
  async login({ email, password, auth }: AuthProps): Promise<ResponseProps> {
    const user = await User.query()
      .where('email', email)
      .first()

      if (!user) {
      throw new UnAuthorizedException('Usuário não encontrado', 404)
    }

    if (!(await Hash.verify(user.password, password))) {
      throw new UnAuthorizedException('Email ou senha invalidos', 400)
    }
    const token = await auth.use('api').generate(user, { expiresIn: '24h' })
    console.log(token)

    return {
      data: { user, token },
      status: 201,
    }
  }

}

export { AuthService }