import Task from "App/Models/Task"
import { BaseServices } from "./baseService"

interface GetTasksProps {
  userId: any
}

class TaskService extends BaseServices{
  constructor() {
    super({ model: Task, name_model: 'tasks' })
    this.Model = Task
  }

  async getTasks({ userId }: GetTasksProps) {
    const query = await Task.query().where({user_id: userId, completed: 0})

    return query
  }
}

export { TaskService }