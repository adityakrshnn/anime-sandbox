import { ChakraProvider, Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import InputManager from "./components/InputManager/InputManager";
import PlaybackControls from "./components/PlaybackControls/PlaybackControls";
import { Properties } from "./models/animations.model";
import { TimelineService } from "./services/timeline.service";
import extendedTheme from "./theme";

export const App = () => {
  const [properties, setProperties] = useState<Properties>({
    left: [0, 100],
    top: [0, 100],
  });
  const timelineService: TimelineService = new TimelineService(properties);

  const setProperty = (property: string, value: any) => {
    const newProperties = {
      ...properties,
      [property]: value,
    };
    setProperties(newProperties);
  };

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
            <Canvas timelineService={timelineService}></Canvas>
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
