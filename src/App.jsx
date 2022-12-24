import { useMemo, useState } from 'react';

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';

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
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search...'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Sort by'
          options={[
            { value: 'title', name: 'By title' },
            { value: 'body', name: 'By text' },
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title='Post List'
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Nothing here :(</h1>
      )}
    </div>
  );
}

export default App;
