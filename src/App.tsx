import { ChakraProvider, Box, Grid, theme, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Canvas from "./components/Canvas/Canvas";
import InputManager from "./components/InputManager/InputManager";

export const App = () => {
  const [properties, setProperties] = useState<any>({ left: [0, 100], top: [0, 1000] });

  const setProperty = (property: string, value: any) => {
    const newProperties = {
      ...properties,
      [property]: value,
    };
    setProperties(newProperties);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          templateRows="repeat(10, 1fr)"
          templateColumns="repeat(10, 1fr)"
          gap={4}
          height="100vh"
          p={3}
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
            colSpan={6}
            bg="papayawhip"
          >
            <Canvas></Canvas>
          </GridItem>

          <GridItem rowSpan={10} colSpan={2} bg="blue">
            <InputManager
              properties={properties}
              setProperty={setProperty}
            ></InputManager>
          </GridItem>

          <GridItem rowSpan={10} colSpan={2} bg="blue" />
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
