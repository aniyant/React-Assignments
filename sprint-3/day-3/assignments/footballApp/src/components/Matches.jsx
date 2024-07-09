import React from 'react'
import {Box, Spinner,Stack,Button,Text,Grid, GridItem, Heading, Flex, Input} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { actionTypes } from '../redux/reducers/actionTypes';
import axios from 'axios';
import { useState } from 'react';
import { act } from 'react';

const baseURl = 'https://jsonmock.hackerrank.com/api/football_matches?';

export const Matches = () => {
    const [page,setPage] = useState(1);
    const dispatch = useDispatch();
    const {loading:isLoading,error:isError,matches:footballMatches,searchQuery} = useSelector((state) => state.matchState);

    useEffect(() => {
        async function fetchData(){
            try{
                dispatch({type:actionTypes.FETCH_MATCH_REQUEST});
                let response = await axios.get(baseURl+`page=${page}`);
                dispatch({type:actionTypes.FETCH_MATCH_SUCCESS,payload:response.data.data});
            }
            catch(err){
                dispatch({type:actionTypes.FETCH_MATCH_FAILURE});
            }
        };
        fetchData();
    },[dispatch,page]);

    console.log(searchQuery)
    const filteredMatches = footballMatches.filter(
        (match) =>
          match.team1.toLowerCase().includes(searchQuery.toLowerCase()) ||
          match.team2.toLowerCase().includes(searchQuery.toLowerCase()) ||
          match.competition.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) {
        return <Spinner size="xl" />;
      }
    
      if (isError) {
        return <Text color="red.500">Error fetching data</Text>;
      }

  return (
    <Box p={4}>
        <Heading mb={10}>Welcome To FootBall Clubs</Heading>
        <Box>
            <Input width={500} m={5} p={5} placeholder="Enter Search" type="text" onChange={(e)=>{dispatch({type:actionTypes.SET_SEARCH_QUERY,payload:e.target.value})}}></Input>
        </Box>
      <Grid spacing={4} templateColumns='repeat(2, 1fr)' gap={8}>
        {filteredMatches.map((match) => (
          <GridItem key={match.competition+match.year+match.team1goals+match.team2goals+match.team1+match.team2} p={4} borderWidth="1px" borderRadius="md">
            <Text>{match.competition}</Text>
            <Text fontSize="xl">{match.team1} vs {match.team2}</Text>
            <Text>Round: {match.round}</Text>
            <Text>Date: {match.year}</Text>
            <Text>Score: {match.team1goals} vs Score: {match.team2goals}</Text>
            <Button onClick={()=>dispatch({type:actionTypes.ADD_TO_LIKED_MATCHES,payload:{matchId:match.competition+match.year+match.team1goals+match.team2goals+match.team1+match.team2,...match}})}>Add To Favorites</Button>
          </GridItem>
        ))}
        
      </Grid>
      <Flex justifyContent="center" gap={10} m={5}>
        <Button onClick={()=>setPage(page-1)} isDisabled={page===1}>Prev</Button>
        <Button><Text>{page}</Text></Button>
        <Button onClick={()=>setPage(page+1)}>Next</Button>
      </Flex>
    </Box>
  )
}
