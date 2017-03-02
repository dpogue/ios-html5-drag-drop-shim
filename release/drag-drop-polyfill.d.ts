export declare type DragImageTranslateOverrideFn = (event: TouchEvent, hoverCoordinates: Point, hoveredElement: HTMLElement, translateDragImageFn: (offsetX: number, offsetY: number) => void) => void;
export interface Config {
    forceApply?: boolean;
    dragImageOffset?: Point;
    dragImageCenterOnTouch?: boolean;
    iterationInterval?: number;
    dragStartConditionOverride?: (event: TouchEvent) => boolean;
    dragImageTranslateOverride?: DragImageTranslateOverrideFn;
    defaultActionOverride?: (event: TouchEvent) => void;
}
export interface Point {
    x: number;
    y: number;
}
export declare const DragDropPolyfill: {
    DEBUG: boolean;
    Initialize: (override?: Config) => void;
};
