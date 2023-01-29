import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {items.map((user) => (
        <li key={user.id}>
          <p>{user.comment}</p>
          <div>
            By <address>{user.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
