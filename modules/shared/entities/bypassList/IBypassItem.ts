import { ICropedImage } from "../../../../libs/imagePicker/IImagePicker/ICropedImage";

export interface IBypassItem {
    id: number;
    title: string;
    comment: string;
    date: string;
    rate: number;
    isDone: boolean;
    photos: ICropedImage[];
    sortNumber: number;
}