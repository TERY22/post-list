import { useState } from 'react';

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'kjafhnjalsnflak' },
    { id: 2, title: 'TypeScript', body: 'kjafhnjalsnflak' },
    { id: 3, title: 'Java', body: 'kjafhnjalsnflak' },
    { id: 4, title: 'C++', body: 'kjafhnjalsnflak' },
    { id: 5, title: 'C#', body: 'kjafhnjalsnflak' },
    { id: 6, title: 'Kotlin', body: 'kjafhnjalsnflak' },
    { id: 7, title: 'PHP', body: 'kjafhnjalsnflak' },
    { id: 8, title: 'Ruby', body: 'kjafhnjalsnflak' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title='Post List' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Nothing here :(</h1>
      )}
    </div>
  );
}

export default App;
