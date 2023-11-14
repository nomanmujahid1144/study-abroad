// Import necessary Chakra UI components and dependencies
import {
  Flex,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export default function RangeField(props: {
  id?: string;
  label?: string;
  extra?: JSX.Element;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  mb?: string;
  [x: string]: any;
}) {
  const {
    id,
    label,
    extra,
    min = 0,
    max = 100,
    step = 1,
    value = min,
    onChange,
    mb,
    ...rest
  } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Flex direction="column" w={'auto'} mb={mb ? mb : '30px'}>
      <FormLabel
        display="flex"
        ms="10px"
        htmlFor={id}
        fontSize="sm"
        color={textColorPrimary}
        fontWeight="bold"
        _hover={{ cursor: 'pointer' }}
      >
        {label}
        <Text fontSize="sm" fontWeight="400" ms="2px">
          {extra}
        </Text>
      </FormLabel>
      <Slider
        {...rest}
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        name={id}
        onChange={onChange}
        colorScheme="blue"
        mt="2"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text mt="1" fontSize="sm" color="secondaryGray.600">
        {value}
      </Text>
    </Flex>
  );
}
