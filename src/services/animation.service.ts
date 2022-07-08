import { AnimationConfig, Properties } from "../models/animations.model";

export class AnimationService {
  static getAnimationConfig = (
    target: fabric.Object,
    properties: Properties,
    fabricCanvas: fabric.Canvas
  ) => {
    const config: AnimationConfig = {
      option: {
        targets: target,
        duration: 1000,
        easing: "linear",
        ...properties,
        update: () => {
          fabricCanvas.renderAll();
        },
      },
      offset: 0,
    };

    return config;
  };
}
