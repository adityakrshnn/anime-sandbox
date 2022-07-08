import { FC, useEffect } from "react";
import { fabric } from "fabric";
import { AnimationService } from "../../services/animation.service";
import { TimelineService } from "../../services/timeline.service";

interface CanvasProps {
  timelineService: TimelineService;
}

const Canvas: FC<CanvasProps> = ({ timelineService }) => {
  let fabricCanvas: fabric.Canvas;

  const initializeFabricCanvas = () => {
    const newfabricCanvas: fabric.Canvas = new fabric.Canvas("canvas");
    const circle = new fabric.Circle({
      radius: 100,
      fill: "rgb(74, 25, 66)",
    });
    newfabricCanvas.add(circle);
    newfabricCanvas.centerObject(circle);
    newfabricCanvas.renderAll();
    fabricCanvas = newfabricCanvas;
  };

  useEffect(() => {
    const canvasWrapper = document.getElementById("canvas-wrapper");
    const canvas = document.getElementById("canvas");
    if (canvas) {
      canvas.setAttribute(
        "width",
        canvasWrapper?.clientWidth.toString() ?? "1280"
      );

      canvas.setAttribute(
        "height",
        canvasWrapper?.clientHeight.toString() ?? "720"
      );
    }

    initializeFabricCanvas();
    timelineService.refreshTimeline(fabricCanvas, fabricCanvas.getObjects()[0]);
  }, []);

  return <canvas id="canvas"></canvas>;
};

export default Canvas;
