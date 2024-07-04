import { LucidModel } from "@ioc:Adonis/Lucid/Orm"

export interface ResponseProps{
  data?:Object | Array<Object>
  status: number
}

export interface ServicesProps{
  model:LucidModel
  name_model:string
}

export interface ServiceData{
  data?:any
  id?:number
  response?:Response
}

export interface Dto{
  all():Promise<ResponseProps>
  store(data:ServiceData):Promise<ResponseProps>
  update(data:ServiceData):Promise<ResponseProps>
  destroy(data:ServiceData):Promise<ResponseProps>
  getByIdModel(data:ServiceData):Promise<ResponseProps>
}

export interface ControllerProps{
  service:any
  validator?:{
    create:any
    update?:any
  }
}
