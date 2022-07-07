import { StackDivider, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import PropertyInput from "../PropertyInput/PropertyInput";
import { Text } from "@chakra-ui/react";

interface InputManagerProps {
  properties: any;
  setProperty: (property: string, value: any) => void;
}

const InputManager: FC<InputManagerProps> = ({ properties, setProperty }) => (
  <VStack width="100%" divider={<StackDivider borderColor="gray.200" />}>
    <Text fontSize={"xl"} textTransform={"uppercase"} fontWeight={"bold"}>
      PROPERTIES
    </Text>

    {Object.keys(properties).map((property) => {
      return (
        <PropertyInput
          propertyName={property}
          propertyValue={properties[property]}
          setProperty={setProperty}
        ></PropertyInput>
      );
    })}
  </VStack>
);

export default InputManager;
