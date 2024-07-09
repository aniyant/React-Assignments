import { useState } from 'react'
import './App.css'
import { Matches } from './components/Matches'
import { LikedMatches } from './components/LikedMatches'
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import {Button, Flex} from '@chakra-ui/react';
import { useSelector } from 'react-redux';


function App() {
  return (
    <BrowserRouter>
       <Flex justifyContent="center" gap={50}>
          <Button><NavLink to="/">All Matches</NavLink></Button>
          <Button><NavLink to="/liked">Liked Matches</NavLink></Button>
       </Flex>
      <Routes>
        <Route path="/" element={<Matches/>} />
        <Route path="/liked" element={<LikedMatches/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
