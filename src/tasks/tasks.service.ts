import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

export interface Task {
    uuid?: number;
    usuariouuid?: string;
    tarea: string;
}

@Injectable()
export class TasksService {

    tasks: Task[] = [
        {uuid: 0, usuariouuid: "Georgina", tarea: "ver a danubio"},
        {uuid: 1, usuariouuid: "Lucas", tarea: "hacer un mate"},
        {uuid: 2, usuariouuid: "Fabian", tarea: "estudiar fisica"}
    ]

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(uuid: number): Task {
        const foundTask = this.tasks.find(task => task.uuid === uuid);
        if (!foundTask) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND);
        return foundTask
    }

    createTask(taskData: Task): Task {
        this.tasks.push(taskData);
        return taskData;
    }

    updateTask(uuid: number, taskdata: Task): Task {
        const foundTask = this.getTask(uuid);
        if (!foundTask) this.createTask(taskdata);
        const edited = {...foundTask, ...taskdata};
        this.tasks = this.tasks.filter(task => task.uuid !== uuid);
        this.tasks.push(edited)
        return edited;
    }
    
    editTask(uuid: number, taskdata: Task): Task {
        const foundTask = this.getTask(uuid);
        if (!foundTask) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND);
        const edited = {...foundTask, ...taskdata};
        this.tasks = this.tasks.filter(task => task.uuid !== uuid);
        this.tasks.push(edited)
        return edited;
    }

    deleteTask(uuid: number): boolean {
        const arrFinal = this.tasks.filter(task => task.uuid !== uuid);
        if (this.tasks == arrFinal) return false;
        this.tasks = arrFinal;
        return true
    }

}
