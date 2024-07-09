import React from 'react'
import {Box,Heading,Flex,Text,Image} from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box bgColor="#edf2f6" width="100%" py={10} px="2xpx" borderRadius={10}>
        <Box m={5}>
            <Heading color="#343a43" m={3}>Our Clients Speak</Heading>
            <Text color="#343a43" fontSize={18}>We have been working with clients around the world</Text>
        </Box>

        <Flex flexDir={["column","column","column","row"]} gap={5} justifyContent="center">
            <Box>
                <Box bgColor="white" p="15px 15px" borderRadius={10} m={7}>
                <Heading color="#5d6064" m={2} as="h4" fontSize={20}>Efficient Collaborating</Heading>
                <Text color="#999da3" fontWeight={500} fontSize={18}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</Text>
                </Box>
                <Box boxSize='100px' mx="auto">
                    <Image boxSize="100%" objectFit="cover" borderRadius="50%" src='https://bit.ly/dan-abramov' alt='Dan Abramov'  fallbackSrc='https://via.placeholder.com/150' />
                </Box>
                <Text p={1} fontWeight="bold">Jane Cooper</Text>
                <Text p={1}>CEO at ABC Corporation</Text>
            </Box>
            <Box>
                <Box bgColor="white" p="15px 15px" borderRadius={10} m={7}>
                <Heading color="#5d6064" m={2} as="h4" fontSize={20}>Efficient Collaborating</Heading>
                <Text color="#999da3" fontWeight={500} fontSize={18}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</Text>
                </Box>
                <Box boxSize='100px' mx="auto">
                    <Image boxSize="100%" objectFit="cover" borderRadius="50%" src='https://bit.ly/dan-abramov' alt='Dan Abramov'  fallbackSrc='https://via.placeholder.com/150' />
                </Box>
                <Text p={1} fontWeight="bold">Jane Cooper</Text>
                <Text p={1}>CEO at ABC Corporation</Text>
            </Box>
            <Box>
                <Box bgColor="white" p="15px 15px" borderRadius={10} m={7}>
                <Heading color="#5d6064" m={2} as="h4" fontSize={20}>Efficient Collaborating</Heading>
                <Text color="#999da3" fontWeight={500} fontSize={18}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</Text>
                </Box>
                <Box boxSize='100px' mx="auto">
                    <Image boxSize="100%" objectFit="cover" borderRadius="50%" src='https://bit.ly/dan-abramov' alt='Dan Abramov'  fallbackSrc='https://via.placeholder.com/150' />
                </Box>
                <Text p={1} fontWeight="bold">Jane Cooper</Text>
                <Text p={1}>CEO at ABC Corporation</Text>
            </Box>
        </Flex>
    </Box>
  )
}
