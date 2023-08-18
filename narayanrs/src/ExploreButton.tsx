import React from 'react';
import { Button } from '@chakra-ui/react';

function ExploreButton() {
  return (
    <Button
      bg="#FF0000"
      size="lg"
      width="170px"
      height="55px"
      position="absolute"
      borderRadius="110"
      border="none"
      overflow="hidden"
      _hover={{ bgColor: 'red.500' }}
      _active={{ bgColor: 'red.600' }}
      ml={"880px"}
      mt="50px"
      top="120px"
      
    >
      <div
        style={{
          position: 'relative',
          left: '1100',
          top: '100',
          width: '10px',
          height: '100%',
          
          
        }}
      ></div>
      <span
        style={{
          display: 'inline-block',
          width: '100%',
          textAlign: 'center',
          color: 'lightyellow',
          fontWeight: 'bold',
        }}
      >
        + Explore
      </span>
    </Button>
  );
}

export default ExploreButton;
