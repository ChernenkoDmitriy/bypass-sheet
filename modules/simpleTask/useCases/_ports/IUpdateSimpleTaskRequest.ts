import { ISimpleTask } from "../../../shared/entities/simpleTask/ISimpleTask";

export interface IUpdateSimpleTaskRequest {
    updateSimpleTask: (item: ISimpleTask) => Promise<{ isError: boolean; data: ISimpleTask; message: string }>;
}