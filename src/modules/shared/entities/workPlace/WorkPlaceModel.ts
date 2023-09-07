import { IStorage, storage } from "../../../../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository"
import { IUser } from "../user/IUser";
import { IMembers } from "../members/IMembers";
import { IWorkPlace } from "./IWorkPlace";

export interface IWorkPlaceModel {
    latitude: number;
    longitude: number;
    chosenWorkPlace: IWorkPlace | null;
    workPlaceList: IWorkPlace[];
};

class WorkPlaceModel implements IWorkPlaceModel {
    private latitudeRepository = new MobXRepository<number>(0);
    private longitudeRepository = new MobXRepository<number>(0);
    private chosenWorkPlaceRepository = new MobXRepository<IWorkPlace | null>(null);
    private workPlaceListRepository = new MobXRepository<[]>([]);

    get latitude() {
        return this.latitudeRepository.data || 0;
    }

    set latitude(data: number) {
        this.latitudeRepository.save(data);
    }

    get longitude() {
        return this.longitudeRepository.data || 0;  
    }

    set longitude(data: number) {
        this.longitudeRepository.save(data);
    }

    get chosenWorkPlace() {
        return this.chosenWorkPlaceRepository.data || null; 
    }

    set chosenWorkPlace(data: IWorkPlace | null) {
        this.chosenWorkPlaceRepository.save(data);
    }

    get workPlaceList() {
        return this.workPlaceListRepository.data || []; 
    }

    set workPlaceList(data: []) {
        this.workPlaceListRepository.save(data);
    }

    clear = () => {
        this.latitude = 0;
        this.longitude = 0;
    }
}

export const workPlaceModel = new WorkPlaceModel();