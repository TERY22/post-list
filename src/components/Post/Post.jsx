import MyButton from '../UI/button/MyButton';
import './Post.css';

const Post = ({ post, number, remove }) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div className='post__body'>{post.body}</div>
      </div>
      <div className='post__btns'>
        <MyButton type='danger' onClick={() => remove(post)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default Post;
