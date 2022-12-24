import { useMemo, useState } from 'react';

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';

import './styles/App.css';
import PostFilter from './components/PostFilter/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'kjafhnjalsnflak' },
    { id: 2, title: 'TypeScript', body: 'kjafdsahnjalsnflak' },
    { id: 3, title: 'Java', body: 'kjafhnjaldassnflak' },
    { id: 4, title: 'C++', body: 'kjafhnjaldassnflak' },
    { id: 5, title: 'C#', body: 'kjafhndasjalsnflak' },
    { id: 6, title: 'Kotlin', body: 'kjasaffhnjalsnflak' },
    { id: 7, title: 'PHP', body: 'kjafhnjasaflsnflak' },
    { id: 8, title: 'Ruby', body: 'kjafhnjfasalsnflak' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Post List'
      />
    </div>
  );
}

export default App;
