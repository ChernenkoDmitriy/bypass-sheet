import { ICropedImage } from "./ICropedImage";

export interface IPickImage {
    onOpenPicker: (cropping?: boolean) => Promise<ICropedImage | null>
}