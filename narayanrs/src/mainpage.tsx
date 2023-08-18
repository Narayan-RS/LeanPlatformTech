import { Avatar, ChakraProvider, Text, Wrap, WrapItem } from '@chakra-ui/react';
import './App.css';
import SearchBar from './SrchBar'
import SidePanel from "./SidePanel";
import ExploreButton from "./ExploreButton";
import Tasksorg from "./Tasks";
import CustomCalendar from "./Custcalender";

function Mainpage() {
  return (
    <ChakraProvider>
      <Wrap spacing="20%">
        <WrapItem>
          <div className='first'>
            <SearchBar /> 
            <div className='sidebar'></div> {/* Replace with your sidebar styling */}
            <div className='content'>
              <Text fontWeight="bold" fontSize="40px" color="LightYellow"ml={"200px"} mt={"5%"}>
                Good Morning, Stargazer
              </Text>
              <Text fontSize="20px" color="LightYellow" mt="0.8%"ml={"200px"}>
                Open panel and explore the wonders of the universe
              </Text>
              <ExploreButton />
              <CustomCalendar onDayClick={function (_day: number): void {
                throw new Error("Function not implemented.");
              }} />
              <Tasksorg />
            </div>
          </div>
        </WrapItem>
        <WrapItem justifyContent="flex-end">
          <div className='user-info'>
            <Avatar
              name='Dan Abrahmov'
              src='https://bit.ly/dan-abramov'
              borderRadius="full"
              left={"1670px"}
              top={"55px"}
              position={"absolute"}
            />
            <Text fontWeight="bold" position={"absolute"} left={"1750px"} top={"70px"}>Hello</Text>
          </div>
        </WrapItem>
        <SidePanel />
      </Wrap>
    </ChakraProvider>
  );
}

export default Mainpage;
