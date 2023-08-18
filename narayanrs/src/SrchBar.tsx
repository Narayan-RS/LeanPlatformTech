import { SearchIcon } from '@chakra-ui/icons';
import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';


function SearchBar() {
  return (
    <InputGroup size="md" w="850px" ml="200px" mt="50px" className="search-bar">
      <Input
        type="text"
        placeholder="Search stars, planets and astronomical events."
        borderRadius="full"
        h="70px"
        pr="50px" 
        bg="transparent"
        border="2px solid darkgrey"
        
        pl="20px"
        
        color="white"
      />
     <InputRightElement
                position="absolute"
                right="10px"
                top="50%"
                transform="translateY(-50%)"
                style={{ cursor: "pointer" }}
                onClick={() => {
                    console.log("Search icon clicked");
                }}
              >
                <Icon as={SearchIcon} w={6} h={6} color="white" />
                
              </InputRightElement>
    </InputGroup>
    
  );
}

export default SearchBar;



