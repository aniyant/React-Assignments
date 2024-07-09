import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, HStack, Text, Input } from '@chakra-ui/react';
import { actionTypes } from '../redux/reducers/actionTypes';

export const BookList = () => {
  const [editId, setEditId] = useState(null);
  const [editBook, setEditBook] = useState(null);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
    console.log(books);
  const handleEdit = (id) => {
    setEditId(id);
    const bookToEdit = books.find((book) => book.id === id);
    setEditBook(bookToEdit);
  };

  const handleChange = (e) => {
    setEditBook({ ...editBook, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    dispatch({ type: actionTypes.UPDATE_BOOK, payload: editBook });
    setEditId(null);
    setEditBook(null);
  };

  const handleDelete = (id) => {
    dispatch({ type: actionTypes.REMOVE_BOOK, payload: id });
  };

  const handleCancel = () => {
    setEditId(null);
    setEditBook(null);
  };
  
  const handleSearch=(e) => {
    dispatch({type:actionTypes.SEARCH_BOOK,payload:e.target.value})
  }
  console.log(books.length);
  if(books.length ==0){
    return (
        <Box>
          <Input type="text" name='search' placeholder='Search By Title' onChange={(e)=>handleSearch(e)} width={500} m={10}/>
        </Box>
    )
  }

  return (
    <Box>
        <Input type="text" name='search' placeholder='Search By Title' onChange={(e)=>handleSearch(e)} width={500} m={10}/>
        {books.map((book) => (
            <HStack key={book.id}>
            {editId !== book.id ? (
              <>
                <Text>Book Name: {book.name}</Text>
                <Text>Book Title: {book.title}</Text>
                <Text>Book Author: {book.author}</Text>
                <Text>Book Genre: {book.genre}</Text>
                <Text>Book Price: {book.price}</Text>
                <Button onClick={() => handleEdit(book.id)}>Edit</Button>
                <Button onClick={() => handleDelete(book.id)}>Delete</Button>
              </>
            ) : (
              <>
                <Input
                  type="text"
                  name="name"
                  value={editBook.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                />
                <Input
                  type="text"
                  name="title"
                  value={editBook.title}
                  onChange={handleChange}
                  placeholder="Enter Title"
                />
                <Input
                  type="text"
                  name="author"
                  value={editBook.author}
                  onChange={handleChange}
                  placeholder="Enter Author"
                />
                <Input
                  type="text"
                  name="description"
                  value={editBook.description}
                  onChange={handleChange}
                  placeholder="Enter Description"
                />
                <Input
                  type="text"
                  name="genre"
                  value={editBook.genre}
                  onChange={handleChange}
                  placeholder="Enter Genre"
                />
                <Button type="submit" onClick={handleUpdate}>
                  Update Book
                </Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </>
            )}
            </HStack>
        ))}
    </Box>
  );
};
