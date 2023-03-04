import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { Task, TasksService } from '../tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    
    @Get() 
    getTasks (): Task[] {    
        return this.tasksService.getTasks();
    }

    @Get(":uuid")
    getTask(@Param( "uuid", ParseIntPipe ) uuid: number): Task {
        return this.tasksService.getTask(uuid);
    }

    @Post()
    createTask( @Body() taskData: Task ): Task {
        return this.tasksService.createTask(taskData);        
    }

    @Put(":uuid")
    updateTask(
        @Body() taskdata: Task,
        @Param("uuid", ParseIntPipe) uuid: number
    ): Task {
        return this.tasksService.updateTask(uuid, taskdata)
    }

    @Patch(":uuid")
    editTask(
        @Body() taskdata: Task,
        @Param("uuid", ParseIntPipe) uuid: number
    ): Task {
        return this.tasksService.editTask(uuid, taskdata);
    }

    @Delete(":uuid")
    deleteTask( @Param("uuid", ParseIntPipe) uuid: number ): boolean {
        return this.tasksService.deleteTask(uuid);
    }
}
