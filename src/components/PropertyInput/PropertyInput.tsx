import {
  Box,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

interface PropertyInputProps {
  propertyValues: any[];
  propertyName: string;
  setProperty: (property: string, value: any) => void;
}

const PropertyInput: FC<PropertyInputProps> = ({
  propertyName,
  propertyValues,
  setProperty,
}) => {
  const handleChange = (
    event: React.FocusEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.value === "") {
      return;
    }

    const newPropertyValues = [...propertyValues];
    newPropertyValues[index] = Number(event.target.value);
    setProperty(propertyName, newPropertyValues);
  };

  return (
    <Box>
      <Text fontSize={"md"} textTransform="uppercase">
        {propertyName}
      </Text>

      <Box display="flex" alignContent="center" justifyContent={"center"}>
        {propertyValues.map((propertyValue, index) => (
          <NumberInput
            defaultValue={propertyValue}
            step={1}
            ml={2}
            mr={2}
            key={index}
            onBlur={(e) => handleChange(e, index)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        ))}

        <Button colorScheme="blue" ml={2} mr={2}>
          <AddIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default PropertyInput;
