import { ITasksModel } from "../../shared/entities/tasks/TasksModel";
import { IDeleteSimpleTaskRequest } from "./_ports/IDeleteSimpleTaskRequest";

export interface IDeleteSimpleTaskUseCase {
    deleteSimpleTask: (id: number) => Promise<void>;
}

export class DeleteSimpleTaskUseCase implements IDeleteSimpleTaskUseCase {
    constructor(
        private simpleTaskRequester: IDeleteSimpleTaskRequest,
        private tasksModel: ITasksModel,
    ) { }

    deleteSimpleTask = async (id: number) => {
        try {
            const data = await this.simpleTaskRequester.deleteSimpleTask(id);
            if (!data?.isError) {
                this.tasksModel.deleteTask(id);
            }
        } catch (error) {
            console.warn('CreateRoomUseCase -> createRoom: ', error);
        }
    }

}
