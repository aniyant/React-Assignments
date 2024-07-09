import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../redux/reducers/actions';
import { Box, Select } from '@chakra-ui/react';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.coffee.sortOrder);

  const handleSortChange = (event) => {
    dispatch(setSortOrder(event.target.value));
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" mb={6} style={{position:"sticky",top:"100px",left:"10px"}}>
      <Select value={sortOrder} onChange={handleSortChange} placeholder="Sort by">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </Box>
  );
};


