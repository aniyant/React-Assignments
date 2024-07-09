import React,{useState} from 'react'
import {Box, Button, Heading, Input, Stack,Text} from '@chakra-ui/react';
import { actionTypes } from '../redux/reducers/actionTypes';
import { useDispatch } from 'react-redux';

const initialBook = {
    id:Date.now(),
    name: '',
    title: '',
    author: '',
    description: '',
    genre:'',
    price: 0,
}
export const AddBook = () => {
    const [book,setBook] = useState(initialBook);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setBook({...book,[e.target.name]:e.target.value});
    }
    const handleSubmit = () => {
        dispatch({type:actionTypes.ADD_BOOK,payload:book});
        setBook(initialBook);
    }
  return (
    <Box width={500} mx="auto">
        <Heading m={5} p={5}>Welcome To Book Mangement System.</Heading>
        <Stack>
            <Input type="text" name="name" value={book.name} onChange={handleChange} placeholder="Enter Name"/>
            <Input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Enter Title"/>
            <Input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Enter Author"/>
            <Input type="text" name="description" value={book.description} onChange={handleChange} placeholder="Enter Description"/>
            <Input type="text" name="genre" value={book.genre} onChange={handleChange} placeholder="Enter Genre"/>
            <Input type="number" name="price" value={book.price} onChange={handleChange} placeholder="Enter Price" min={0}/>
            <Button type='Submit' onClick={handleSubmit}>Add Book</Button>
        </Stack>
    </Box>
  )
}
