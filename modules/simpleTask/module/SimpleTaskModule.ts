import { AxiosRequester } from "../../../libs/requester";
import { Config } from "../../../src/config";
import { tasksModel } from "../../shared/entities/tasks/TasksModel";
import { SimpleTaskRequester } from "../interactors/SimpleTaskRequester";
import { DeleteSimpleTaskUseCase } from "../useCases/DeleteSimpleTaskUseCase";
import { UpdateSimpleTaskUseCase } from "../useCases/UpdateSimpleTaskUseCase";

class SimpleTaskModule {
    private requester = new AxiosRequester();
    private config = new Config();
    private simpleTaskRequester = new SimpleTaskRequester(this.requester, this.config);

    public updateSimpleTask = new UpdateSimpleTaskUseCase(this.simpleTaskRequester, tasksModel).updateSimpleTask;
    public deleteSimpleTask = new DeleteSimpleTaskUseCase(this.simpleTaskRequester, tasksModel).deleteSimpleTask;
}

export const simpleTaskModule = new SimpleTaskModule();
