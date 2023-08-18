import {ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainpage';
import LoginPage from './LoginPage';


function App() {
  return (
      
        <ChakraProvider>
          <Router>
            <Routes>
              <Route path="/mainpage" element={<MainPage />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
          </Router>
        </ChakraProvider>
      
    
  );
}

export default App;
