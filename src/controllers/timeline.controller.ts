import anime from "animejs";
import { AnimeInstance, AnimeParams, AnimeTimelineInstance } from "animejs";
import { AnimationConfig } from "../models/animations.model";

export class TimelineController {
  static getNewTimeline(config: AnimeParams | ReadonlyArray<AnimeInstance>) {
    return anime.timeline(config);
  }

  static addToTimeline(
    timeline: AnimeTimelineInstance,
    config: AnimationConfig
  ) {
    timeline.add(config.option, config.offset ?? 0);
  }

  static removeFromTimeline(
    targets: fabric.Object[] | fabric.Group[] | HTMLElement
  ) {
    anime.remove(targets);
  }

  static updateAnimation(
    timeline: AnimeTimelineInstance,
    targets: fabric.Object[] | fabric.Group[],
    config: AnimationConfig
  ) {
    /**
     * Animejs has no update functionality
     * Remove element first and then add its animation again
     */
    TimelineController.removeFromTimeline(targets);
    TimelineController.addToTimeline(timeline, config);
  }
}
