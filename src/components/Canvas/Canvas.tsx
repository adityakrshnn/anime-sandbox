import { FC, useEffect } from "react";

interface CanvasProps {}

const Canvas: FC<CanvasProps> = () => {
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
  }, []);

  return <canvas id="canvas"></canvas>;
};

export default Canvas;
