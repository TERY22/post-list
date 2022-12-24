import { useMemo, useState } from 'react';

import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

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
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

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
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton style={{ marginTop: '20px' }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Post List'
      />
    </div>
  );
}

export default App;
