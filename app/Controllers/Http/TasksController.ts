import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { TaskService } from "App/Service/taskService";
import CreateTaskValidator from "App/Validators/TaskValidator";
import { BaseController } from "./BaseController";

export default class TasksController extends BaseController{
  constructor() {
    super({
      service: TaskService,
      validator: {
        create: CreateTaskValidator,
      },
    })
  }

  async getTask({ response, params }: HttpContextContract) {
    try{
      const service = new TaskService()
      const { id } = params
  
      const tasks = await service.getTasks({userId: id})
  
      return response.json(tasks)
      
    } catch(err) {
      return []
    }
  }

  async updateTask({ request, params }: HttpContextContract) {
    try {
      const service = new TaskService()
      const data = request.only(['completed']) 
      const { id } = params

      const response = await service.update({ data, id })
      return response
    } catch (err) {
      return {
        data: {
          error: 'Ocorreu um erro ao atualizar a tarefa',
        },
        status: 500,
      }
    }
  }
}
