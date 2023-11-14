// Chakra imports
import {
  Flex,
  FormLabel,
  Select,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SelectField(props: {
  id?: string;
  label?: string;
  extra?: JSX.Element;
  options?: string[];
  placeholder?: string;
  mb?: string;
  [x: string]: any;
}) {
  const { id, label, extra, options, placeholder, mb, ...rest } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Flex direction="column" mb={mb ? mb : '30px'}>
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
      <Select
        {...rest}
        id={id}
        variant="main"
        name={id}
        placeholder={placeholder}
        fontWeight="500"
        _placeholder={{ fontWeight: '400', color: 'secondaryGray.600' }}
        h="44px"
        maxH="44px"
      >
        {options &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </Select>
    </Flex>
  );
}
