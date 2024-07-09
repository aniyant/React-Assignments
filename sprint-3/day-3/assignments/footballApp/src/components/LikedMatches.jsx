import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box,Grid,GridItem,Text,Button,Heading } from '@chakra-ui/react';
import { actionTypes } from '../redux/reducers/actionTypes';

export const LikedMatches = () => {
  const dispatch = useDispatch();
  const LikedMatches = useSelector((state)=>state.LikedState)
  console.log(LikedMatches);
  return (
    <Box p={4}>
        <Heading mb={10}>Welcome To FootBall Clubs</Heading>
        {
          LikedMatches.length === 0 
          ? 
          <Text>No Liked Matches Found</Text> 
          : 
      <Grid spacing={4} templateColumns='repeat(2, 1fr)' gap={8}>
        {LikedMatches.map((match) => (
          <GridItem key={match.matchId} p={4} borderWidth="1px" borderRadius="md">
            <Text>{match.competition}</Text>
            <Text fontSize="xl">{match.team1} vs {match.team2}</Text>
            <Text>Round: {match.round}</Text>
            <Text>Date: {match.year}</Text>
            <Text>Score: {match.team1goals} vs Score: {match.team2goals}</Text>
            <Button onClick={()=>dispatch({type:actionTypes.REMOVE_LIKED_MATCH,payload:match.matchId})}>Remove From Favorites</Button>
          </GridItem>
        ))}
        
      </Grid>
      }
      </Box>
  )
}
