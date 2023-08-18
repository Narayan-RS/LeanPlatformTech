import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text
  
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import myImage from './assets/redbg.png.jpg'


const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    
  
    
  };

  return (
    <div>
      
     <Box
        maxW="768px"
        style={{ position: 'relative', overflow: 'hidden', flex: 1 }}
      >
        <img
          src={myImage}
          alt="My Image"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'fill',
          objectPosition: 'top left',width: '160vh', position:"relative",
          height: '160vh',}}
        />
      </Box>
      
      <Box
      display="flex"
      ml={"1000px"}
      alignItems="center"
      height="120vh"
      paddingTop="100px"
      top={"10px"}
      position={"absolute"}
    >
      <Box>
      <Text fontSize={"50px"}  top={"30px"} position={"absolute"} ml={"600px"} fontWeight={"bold"}display={"inline-block"}>
        SkyGaze
      </Text>
      <Text fontSize={"20px"} top={"90px"} mt={"10px"} position={"absolute"} ml={"720px"} display={"inline-block"}>
        Explore the 
      </Text>
      </Box>
      <form onSubmit={handleLogin}>
        <Box
          p={2}
          width="500px"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          borderColor={"black"}
          
          
        >
          <Heading as="h2" size="lg" marginBottom="7">
            Login
          </Heading>
          <FormControl>
            <FormLabel>Search for celestial bodies</FormLabel>
            <Input
              type="text"
              placeholder="Enter star or planet name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              borderRadius={"40px"}
              bg={"#333333"}
             
            />
          </FormControl>
          <FormControl mt={7} >
            <FormLabel >Password</FormLabel>
            <Input
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              borderRadius={"40px"}
              bg={"#333333"}
              
            />
          </FormControl>
          <Link to="/mainpage">
            <Button mt={10} bg="white" type="submit" borderRadius={"40px"} width={"485px"} alignSelf={"center"}>
              Log In
            </Button>
            
          </Link>
          <Text mt={"20px"} position={"absolute"} cursor={"pointer"} onClick={() => alert('Enter 1234')}>
              Forgot Password?
            </Text>
        </Box>
      </form>
    </Box>
    
    </div>

  );
  
};

export default LoginPage;
