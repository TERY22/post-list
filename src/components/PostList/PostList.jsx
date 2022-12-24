import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from '../Post/Post';

import './PostList.css';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center', color: 'teal' }}>Nothing here :(</h1>
    );
  }

  return (
    <div className='post-list'>
      <h1 className='post-list__title'>{title}</h1>
      <TransitionGroup>
        {posts.map((post, idx) => (
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <Post remove={remove} post={post} number={idx + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
