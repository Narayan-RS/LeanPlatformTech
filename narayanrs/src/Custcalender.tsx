import React, { useState } from 'react';
import { Button,  Flex, Text, Badge, Avatar, Wrap } from '@chakra-ui/react';

interface CustomCalendarProps {
  onDayClick: (day: number) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ onDayClick }) => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    onDayClick(day);
  };

  // Mock tasks data for each day (you can replace this with your actual data)
  const tasksData = [
    { day: 1, tasks: ['Task 1', 'Task 2'] },
    { day: 2, tasks: [<div>

        <Wrap cursor={"pointer"}
        >
        <Avatar
         size="md"
         name="2"
         bg={"gray"}
         ml={'25'}
         mt={'10px'}/>
         
        <Text
        size={'20px'}
        ml="20px"
        mt={"20px"}
        >
            Planetarium visit
        </Text>
        
        </Wrap>
        <Wrap cursor={"pointer"}>
        <Text
        size={'5px'}
        ml="100px"
        mt={"10px"}
        >
            Guided tour with an astronomer
        </Text>
        <Text
        size={'5px'}
        ml="600px"
        mt={"0px"}
        position={"absolute"}
        >
           19:00-21:00
        </Text>
        </Wrap>
        
      
        </div>
  ,
        <div>
            <Wrap cursor={"pointer"}>
        <Avatar
         size="md"
         name="5"
         bg={"gray"}
         ml={'25'}
         mt={'10px'}/>
        
        <Text
        size={'20px'}
        ml="20px"
        mt={"20px"}
        >
            Astronomy Lecture
        </Text>
            
        </Wrap>
        <Wrap cursor={"pointer"}>
        <Text
        size={'5px'}
        ml="100px"
        mt={"10px"}
        >
            Lorem ipsum
        </Text>
        <Text
        size={'5px'}
        ml="600px"
        mt={"0px"}
        position={"absolute"}
        >
           18:00-19:30
        </Text>
        </Wrap>
        </div>,
        <div>
        <Wrap cursor={"pointer"}>
    <Avatar
     size="md"
     name="8"
     bg={"gray"}
     ml={'25'}
     mt={'10px'}/>
    
    <Text
    size={'20px'}
    ml="20px"
    mt={"20px"}
    >
        Astronomy workshop
    </Text>
        
    </Wrap>
    <Wrap cursor={"pointer"}>
    <Text
    size={'5px'}
    ml="100px"
    mt={"10px"}
    >
        Guided with an astronomer
    </Text>
    <Text
    size={'5px'}
    ml="600px"
    mt={"0px"}
    position={"absolute"}
    >
       14:00-16:00
    </Text>
    </Wrap>
    </div>,
    <div>
    <Wrap cursor={"pointer"}>
<Avatar
 size="md"
 name="1"
 bg={"gray"}
 ml={'25'}
 mt={'10px'}/>

<Text
size={'20px'}
ml="20px"
mt={"20px"}
>
   Stellar Observation
</Text>
    
</Wrap>
<Wrap
cursor={"pointer"}>
<Text
size={'5px'}
ml="100px"
mt={"10px"}
>
    Reccurring event
</Text>
<Text
size={'5px'}
ml="600px"
mt={"0px"}
cursor={"pointer"}
position={"absolute"}
>
   20:00-22:00
</Text>
</Wrap>
</div>,
<div >
            <Wrap cursor={"pointer"}>
        <Avatar
         size="md"
         name="9"
         bg={"gray"}
         ml={'25'}
         mt={'10px'}
         cursor={"pointer"}/>
        
        <Text
        size={'20px'}
        ml="20px"
        mt={"20px"}
        >
            Astronomy conference
        </Text>
            
        </Wrap >
        <Wrap cursor={"pointer"}>
        <Text
        size={'5px'}
        ml="100px"
        mt={"10px"}
        >
            Stargazing meeting
        </Text>
        <Text
        size={'5px'}
        ml="600px"
        mt={"0px"}
        position={"absolute"}
        >
           09:00-17:00
        </Text>
        </Wrap>
        <Button
        mt={"25px"}
        width={"700px"}
        borderRadius={"40px"}
        h={"50px"}
        size={"lg"}
        ml={"10px"}
        >
        See entire schedule
    </Button> 
        </div>
       
    
    ] },
    
  ];

  const tasksForSelectedDay = selectedDay ? tasksData.find(item => item.day === selectedDay)?.tasks : [];

  return (
    <Flex direction="column"  ml="1100px" position="absolute" top="170px">
      
        <Button colorScheme="black" fontSize="25px" fontWeight="bold" position={"absolute"}>
          December 2022
        </Button>
      
      <Flex alignItems="center" justifyContent="fixed" >
        {Array.from({ length: 7 }, (_, index) => (
          <Flex
            key={index}
            direction="column"
            alignItems="center"
            flex="1"
            minWidth="40px"
            cursor="pointer"
            onClick={() => handleDayClick(index + 1)}
            ml={"15px"}
            mt={"50px"}
            
            _hover={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
              }}
          >
            <Text fontSize="md" fontWeight="bold" >
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
            </Text>
            <Text fontSize="md" fontWeight="bold" >
              {index + 2}
            </Text>
          </Flex>
        ))}
      </Flex>

      {/* Tasks for Selected Day */}
      {tasksForSelectedDay && tasksForSelectedDay.length > 0 && (
        <Flex direction="column"  mt="4">
          <Text fontSize="lg" fontWeight="bold"  ml="30px">
            Upcoming celestial events on {selectedDay}
          </Text>
          {tasksForSelectedDay.map((task, index) => (
            <Badge key={index} colorScheme="black" variant="solid" mt="2">
              <Text fontSize="md" fontWeight="bold" textTransform={"capitalize"}>
                {task}
              </Text>
            </Badge>
          ))}
        </Flex>
      )}
    </Flex>

  );
};

export default CustomCalendar;
