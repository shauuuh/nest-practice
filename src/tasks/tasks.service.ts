import { Injectable } from "@nestjs/common";

@Injectable({})

export class TasksService {
    getTasks() {
        return ['Getting all tasks','getting task1']
    }

    createTask() {
        return 'Creating tasks'
    }
    
    updateTask() {
        return 'Updating tasks'
    }
    
    DeleteTask() {
        return 'Deleting tasks'
    }
    
    updateTaskStatus() {
        return 'Task Status updated'
    }
}