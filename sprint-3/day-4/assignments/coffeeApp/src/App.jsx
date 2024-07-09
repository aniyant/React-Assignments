import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { CoffeeList } from './components/CoffeeList.jsx' ;
import {Sidebar} from './components/Sidebar';

const App = () => {
  return (
    <Box width={1280} m="auto">
      <Flex direction="row" p={5}>
        <Box width="20%" mr={5}>
        <Sidebar />
        </Box>
        <Box width="80%">
          <CoffeeList />
        </Box>
    </Flex>
    </Box>
  );
};

export default App;
