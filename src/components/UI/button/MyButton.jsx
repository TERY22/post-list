import cl from './MyButton.module.css';

const MyButton = ({ children, type, ...props }) => {
  const rootClasses = [cl.myBtn];

  if (type === 'danger') {
    rootClasses.push(cl.danger);
  }

  return (
    <button {...props} className={rootClasses.join(' ')}>
      {children}
    </button>
  );
};

export default MyButton;
