import { ISimpleTask } from "../../shared/entities/simpleTask/ISimpleTask";
import { ITasksModel } from "../../shared/entities/tasks/TasksModel";
import { IUpdateSimpleTaskRequest } from "./_ports/IUpdateSimpleTaskRequest";

export interface IUpdateSimpleTaskUseCase {
    updateSimpleTask: (item: ISimpleTask) => Promise<void>;
}

export class UpdateSimpleTaskUseCase implements IUpdateSimpleTaskUseCase {
    constructor(
        private simpleTaskRequester: IUpdateSimpleTaskRequest,
        private tasksModel: ITasksModel,
    ) { }

    updateSimpleTask = async (item: ISimpleTask) => {
        try {
            const data = await this.simpleTaskRequester.updateSimpleTask(item);
            if (!data?.isError) {
                this.tasksModel.updateTask(data.data);
            }
        } catch (error) {
            console.warn('UpdateSimpleTaskUseCase -> updateSimpleTask: ', error);
        }
    }

}
