import { DragImageTranslateOverrideFn, Config } from "./drag-drop-polyfill.js";
export interface ScrollOptions {
    threshold?: number;
    velocityFn: (velocity: number, threshold: number) => number;
}
export declare const HandleDragImageTranslateOverride: DragImageTranslateOverrideFn;
export declare const DragDropPolyfill: {
    DEBUG: boolean;
    Initialize: (override?: Config) => void;
    SetOptions: (options: ScrollOptions) => void;
};
