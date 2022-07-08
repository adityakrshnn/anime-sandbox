import { AnimeAnimParams, AnimeParams } from "animejs";

export type AnimationConfig = {
  option: ExtendedAnimeAnimParams;
  offset?: number;
};

export type AnimationConfigExtraParams = {
  objects?: any[];
  canvas?: fabric.Canvas;
  delay?: number;
};

export interface ExtendedAnimeAnimParams extends AnimeParams {
  keyframes?: Keyframe[] | ReadonlyArray<AnimeAnimParams>;
}

export type Properties = {
  [key: string]: number[];
};
