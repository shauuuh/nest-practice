import {Controller, Delete, Get, Post, Put, Patch} from '@nestjs/common'
import { TasksService } from './tasks.service';

@Controller({}) // ('/tasks') global route
export class TaskController {
  tasksService:TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService
  }
  /*
  equal -> constructor(private tasksService: TasksService) {}
  */

  @Get('/tasks')
  getAllTaks() {
    return this.tasksService.getTasks();
  }

  @Post('/tasks')
  createTask() {
    return this.tasksService.createTask();
  }

  @Put('/tasks')
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Delete('/tasks')
  DeleteTask() {
    return this.tasksService.DeleteTask();
  }

  @Patch('/tasks')
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}