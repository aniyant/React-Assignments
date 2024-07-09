import React from 'react'
import {Box, Button, Card, CardBody,CardHeader,Image, 
    Spacer, Stack,CardFooter, Text} from '@chakra-ui/react';

export const CardComponent = () => {
  return (
    <div>
      <Card width="450px" mx="auto" p={5} borderRadius={10} boxShadow="rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px">
        <CardBody>
          <Box boxSize='150px' mx="auto">
            <Image boxSize="100%" objectFit="cover" borderRadius="50%" src='https://bit.ly/dan-abramov' alt='Dan Abramov'  fallbackSrc='https://via.placeholder.com/150' />
          </Box>
         <Text fontSize={28} fontWeight="bold">Lindesey James</Text>
          <Text fontSize={18} color="#748093">@Lindesey_jam3s</Text>
          <Text fontSize={18} color="#a4a9b3" fontWeight={400}>Actress, musician, songwriter <br/> and artist.
                PM for inquires <br/> or</Text>
          <Text fontSize={18} color="#a4a9b3" fontWeight={400}>#tag</Text>
          <Text fontSize={18} color="#a4a9b3" fontWeight={400}>me in your posts</Text>

        </CardBody>
        <Stack direction="row">
            <Button fontSize={16} px={4} py={1} borderRadius="10px" fontWeight="500">#ART</Button>
            <Spacer/>
            <Button fontSize={16} px={4} py={1} borderRadius="10px" fontWeight="500">#PHOTOGRAPHY</Button>
            <Spacer/>
            <Button fontSize={16} px={4} py={1} borderRadius="10px" fontWeight="500">#MUSIC</Button>
        </Stack>

        <CardFooter>
          <Button fontSize={20} px={12} py={6} borderRadius="25px" fontWeight="bold">Message</Button>
          <Spacer/>
          <Button fontSize={20}  bgColor="#4298e1" px={12} py={6} borderRadius="25px" fontWeight="bold" color="white">Follow</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
