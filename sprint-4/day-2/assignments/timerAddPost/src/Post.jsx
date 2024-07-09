// src/Post.js
import React, { memo } from 'react';

const Post = memo(({ post, toggleVerify }) => {
  const { id, title, body, verifyPost } = post;
  const backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(backgroundColor);

  return (
    <div style={{ backgroundColor, padding: '10px', margin: '10px', border: '1px solid #000' }}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={() => toggleVerify(id)}>
        {verifyPost ? 'Verified' : 'Verify'}
      </button>
    </div>
  );
});

export default Post;
