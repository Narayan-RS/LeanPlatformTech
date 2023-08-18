import { Box, Button, Flex, Text, Avatar, Badge,  Wrap,Center } from '@chakra-ui/react';
import Graphs from './graph';

function MyTasks() {
    return (
      <Text fontSize="md" fontWeight="bold" color="lightyellow" ml="210px" mt={"60px"} mb="0px">
        My Tasks
      </Text>
    );
  }
  function CardComponent() {
  return (
    
    <Box
      width="850px" 
      margin="190px"
      marginTop="20px"
      position="relative"
      bg="#333333"
      p="6"
      borderWidth="10px"
      borderRadius="40px"
      boxShadow="lg"
      borderColor="black"
    >
     
      
      <Text fontSize="sm" fontWeight="bold" color="lightyellow" ml=" 5px"> 
        2 active Tasks
      </Text>
      <Flex direction="column" mt="2px" mb="2" color="lightyellow">
        <Badge colorScheme="#333333" variant="solid" mb="1px">
          <Flex alignItems="center" justifyContent="space-between" mt="30px">
            <Wrap>
              <Avatar
                size="md"
                name="Stargazer"
                src="data:image/jpeg;base64,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"
              />
              <Text fontSize="md" fontWeight="bold" mt="10px" ml="70px" textTransform="capitalize" position={"absolute"}>
                Stargazer
              </Text>
            </Wrap>
            <Text fontSize="md" fontWeight="bold" textTransform="capitalize"ml="300px"position={"absolute"}>
              Meteor shower observation
            </Text>
            <Text fontSize="md" fontWeight="bold" textTransform="capitalize">
              Tonight's event
            </Text>
          </Flex>
        </Badge>
        <Badge colorScheme="#333333" variant="solid" mb="1px">
          <Flex alignItems="center" justifyContent="space-between" mt="30px">
            <Wrap>
              <Avatar
                size="md"
                name="Stargazer"
                src="data:image/jpeg;base64,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"
              />
              <Text fontSize="md" fontWeight="bold" mt="10px" ml="70px" textTransform="capitalize" position={"absolute"}>
                Stargazer
              </Text>
            </Wrap>
            <Text fontSize="md" fontWeight="bold" textTransform="capitalize"ml="300px"position={"absolute"}>
              Planet mars observation
            </Text>
            <Text fontSize="md" fontWeight="bold" textTransform="capitalize">
              Tomorrow's event
            </Text>
          </Flex>
        </Badge>

        <Badge colorScheme="#333333" variant="solid" mb="1">
          <Flex alignItems="center" justifyContent="space-between" mt="30px">
            <Wrap>
              <Avatar
                size="md"
                name="Stargazer"
                src="https://bit.ly/prosper-baba"
              />
              <Text fontSize="md" fontWeight="bold" mt="10px" ml="70px" textTransform="capitalize" position={"absolute"}>
                Stargazer
              </Text>
            </Wrap>
            <Text fontSize="md" fontWeight="bold" textTransform="capitalize"ml="300px"position={"absolute"}>
              Stellar photography workshop
            </Text>
            <Text fontSize="md" fontWeight="bold" textTransform="capitalize">
              Tonight's event
            </Text>
          </Flex>
        </Badge>
        
        
      </Flex>

      <Center mt="4">
      <Button background="white" mt="4" mx="auto" color={"black"}
      size="lg"
      width="170px"
      height="55px"
      position="relative"
      borderRadius="110"
      border="none"
      overflow="hidden">
        See all Events
      </Button>
      </Center>
    </Box>

    
  );
}
function Tasksorg() {
    return (
      <>
        <MyTasks />
        <CardComponent />
        <Graphs/>
      </>
    );
  }

export default Tasksorg;
