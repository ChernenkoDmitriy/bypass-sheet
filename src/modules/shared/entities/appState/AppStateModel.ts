import { MobXRepository } from "../../repository/MobXRepository";

export interface ISettingModel {
    isLoading: boolean;
    isConnected: boolean | null;
}

class AppStateModel implements ISettingModel {
    private isLoadingRepository = new MobXRepository(false);
    private isConnectedRepository = new MobXRepository(false);

    constructor() {

    }

    get isLoading() {
        return this.isLoadingRepository.data || false;
    }

    set isLoading(data: boolean) {
        this.isLoadingRepository.save(data);
    }

    get isConnected() {
        return this.isConnectedRepository.data || true;
    }

    set isConnected(data: boolean) {
        this.isConnectedRepository.save(data);
    }
}

export const appStateModel = new AppStateModel();
