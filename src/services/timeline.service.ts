import anime, { AnimeParams, AnimeTimelineInstance } from "animejs";
import { TimelineController } from "../controllers/timeline.controller";
import { Properties } from "../models/animations.model";
import { AnimationService } from "./animation.service";

export class TimelineService {
  timeline: AnimeTimelineInstance;
  properties: Properties;

  constructor(properties: Properties) {
    this.timeline = this.createTimeline();
    this.properties = properties;
  }

  createTimeline() {
    const config: AnimeParams = {
      autoplay: false,
      //     // Timeline updates
      //     // this.setState({
      //     //   currentTime: tl.currentTime / 1000,
      //     // });
      //     // eslint-disable-next-line autofix/no-console
      //     // console.log(`Current Time ${tl.currentTime}`);
      //   },
      //   complete: () => this.onTimelineComplete(),
    };
    return TimelineController.getNewTimeline(config);
  }

  play = () => {
    this.timeline.play();
  };

  pause = () => {
    this.timeline.pause();
  };

  seek = (time: number) => {
    this.timeline.restart();
    this.timeline.seek(time);
    this.timeline.pause();
    this.timeline.tick(time);
  };

  getCurrentTime = () => {
    return this.timeline.currentTime;
  };

  refreshTimeline = (fabricCanvas: fabric.Canvas, target: fabric.Object) => {
    const config = AnimationService.getAnimationConfig(
      target,
      this.properties,
      fabricCanvas
    );
    TimelineController.updateAnimation(this.timeline, [target], config);
  };
}
