import React, { useState } from 'react'; // Step 1
import { Button, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { baseURL } from 'constants/baseURL';

function Dropzone(props) {
  const { handleImage, editImage, content, ...rest } = props;
  const [selectedImage, setSelectedImage] = useState(null); // Step 2
  const bg = useColorModeValue('gray.100', 'navy.700');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.100');

  const onDrop = (acceptedFiles) => {
    // Step 4
    const file = acceptedFiles[0];
    setSelectedImage(file);
    handleImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop, // Step 3
    accept: 'image/jpeg, image/png', // Allow only JPEG and PNG
  });

  return (
    <>
      <Flex
        align="center"
        justify="center"
        bg={bg}
        border="1px dashed"
        borderColor={borderColor}
        borderRadius="16px"
        w="100%"
        maxW="100%"
        h="max-content"
        minH="20rem"
        cursor="pointer"
        {...getRootProps({ className: 'dropzone' })}
        pt={selectedImage ? '0px !important' : '80px !important'}
        pb={selectedImage ? '0px !important' : '105px !important'}
        {...rest}
      >
        <input {...getInputProps()} />
        {console.log(selectedImage)}
        {console.log(editImage)}
        {selectedImage || editImage ? ( // Step 5
          <img
            src={
              editImage !== '' && !selectedImage
                ? baseURL + editImage
                : URL.createObjectURL(selectedImage)
            }
            style={{ maxHeight: '20rem', width: '-webkit-fill-available' }}
            alt="Selected"
          />
        ) : (
          <Button variant="no-effects">{content}</Button>
        )}
      </Flex>
    </>
  );
}

export default Dropzone;
