import { AuthContract } from "@ioc:Adonis/Addons/Auth"

export interface AuthProps {
  email: string
  password: string
  auth: AuthContract
}