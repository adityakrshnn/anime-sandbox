import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

interface PropertyInputProps {
  propertyValue: any[];
  propertyName: string;
  setProperty: (property: string, value: any) => void;
}

const PropertyInput: FC<PropertyInputProps> = ({
  propertyName,
  propertyValue,
  setProperty,
}) => {
  return (
    <Box display="flex" alignContent="center" justifyContent={"center"}>
      {propertyName} {propertyValue}
    </Box>
  );
};

export default PropertyInput;
