import { ChakraProvider, Box, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import InputManager from "./components/InputManager/InputManager";
import PlaybackControls from "./components/PlaybackControls/PlaybackControls";
import { Properties } from "./models/animations.model";
import { TimelineService } from "./services/timeline.service";
import extendedTheme from "./theme";
import { fabric } from "fabric";

export const App = () => {
  const [properties, setProperties] = useState<Properties>({
    left: [0, 100],
    top: [0, 100],
  });
  const timelineService: TimelineService = useMemo(
    () => new TimelineService(properties),
    [properties]
  );

  const [fabricCanvas, setFabricCanvas] = useState<fabric.StaticCanvas>(
    new fabric.StaticCanvas(null)
  );

  const setProperty = (property: string, value: any) => {
    const newProperties = {
      ...properties,
      [property]: value,
    };
    setProperties(newProperties);
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

    const newfabricCanvas: fabric.StaticCanvas = new fabric.StaticCanvas(
      "canvas"
    );
    const circle = new fabric.Circle({
      radius: 100,
      fill: "rgb(74, 25, 66)",
    });
    newfabricCanvas.add(circle);
    newfabricCanvas.centerObject(circle);
    newfabricCanvas.renderAll();
    setFabricCanvas(newfabricCanvas);
  }, []);

  useEffect(() => {
    timelineService.refreshTimeline(fabricCanvas, fabricCanvas.getObjects()[0]);
  }, [properties, fabricCanvas, timelineService]);

  return (
    <ChakraProvider theme={extendedTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          templateRows="repeat(10, 1fr)"
          templateColumns="repeat(10, 1fr)"
          height="100vh"
        >
          {/* <GridItem
          rowSpan={1}
          colSpan={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="100%" height="100%" bg="tomato" />

          <ColorModeSwitcher justifySelf="flex-end" />
        </GridItem> */}

          <GridItem
            id="canvas-wrapper"
            rowSpan={10}
            colSpan={8}
            bg="rgb(232, 155, 202)"
          >
            <canvas id="canvas"></canvas>;
          </GridItem>

          <GridItem rowSpan={10} colSpan={2} bg="rgb(206, 120, 173)">
            <Box position={"absolute"} transform="translateX(-30px)">
              <PlaybackControls
                timelineService={timelineService}
              ></PlaybackControls>
            </Box>
            <InputManager
              properties={properties}
              setProperty={setProperty}
            ></InputManager>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
