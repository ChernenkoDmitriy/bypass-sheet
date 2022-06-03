export interface IDeleteSimpleTaskRequest {
    deleteSimpleTask: (id: number) => Promise<{ isError: boolean; message: string }>;
}