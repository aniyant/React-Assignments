import { useState } from 'react'
import './App.css'
import { AddBook } from './components/AddBook'
import { BookList } from './components/BookList'
import { Provider } from'react-redux'
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <AddBook/>
      <BookList/>
    </Provider>
  )
}

export default App
