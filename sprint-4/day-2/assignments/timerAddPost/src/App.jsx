import './App.css'
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Post from './Post';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addPost = () => {
    setPosts(prevPosts => [
      ...prevPosts,
      {
        id: posts.length + 1,
        title,
        body,
        verifyPost: false
      }
    ]);
    setTitle('');
    setBody('');
  };

  const toggleVerify = useCallback((id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  const memoizedPosts = useMemo(() => posts, [posts]);

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={addPost}>Add Post</button>
      {memoizedPosts.map((post) => (
        <Post key={post.id} post={post} toggleVerify={toggleVerify} />
      ))}
    </div>
  );
};

export default App;
