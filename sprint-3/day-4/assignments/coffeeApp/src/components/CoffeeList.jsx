import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../redux/reducers/actions';
import { Box, Grid, Spinner, Text,Image } from '@chakra-ui/react';

export const CoffeeList = () => {
  const dispatch = useDispatch();
  const { coffeeList, isLoading, error, sortOrder } = useSelector((state) => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffee(sortOrder));
  }, [dispatch, sortOrder]);

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Error: {error}</Text>;
//   console.log("coffeelistfrom",coffeeList)
  return (
    <Grid templateColumns="repeat(3,1fr)" gap={5} p={5}>
      {coffeeList.map(({id,title,description,image,price,ingredients}) => (
        <Box width={300} key={id} p={5} shadow="md" borderWidth="1px">
          <Image boxSize="300px" objectFit='cover' src={image} alt={title}/>
          <Text fontSize="xl" mb={2}>{title}</Text>
          <Text>{description}</Text>
          <Text>Ingredients: {ingredients.join(', ')}</Text>
          <Text>Price: {price}</Text>
        </Box>
      ))}
    </Grid>
  );
};

