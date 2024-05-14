import { useState, FormEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { EntityId } from "../../shared/types";
import { Form } from "./CommentFormStyle";
import { submitComment } from "../../pages/request";
import { UPDATE_COMMENTS_ACTION } from "../../store/comments";

type CommentFormProps = {
  post: EntityId;
};

export const CommentForm: FC<CommentFormProps> = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await submitComment(post, name, value);
    const comments = await response.json();

    setLoading(false);
    setValue("");
    setName("");

    if (response.status === 200) {
      dispatch({ type: UPDATE_COMMENTS_ACTION, comments });
    }
  };

  return (
    <Form onSubmit={submit}>
      <h3>Your comment</h3>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        name="comment"
        value={value}
        placeholder="What do you think?"
        onChange={(e) => setValue(e.target.value)}
        required
      />
      {loading ? <span>Submitting...</span> : <button>Submit</button>}
    </Form>
  );
};

export default CommentForm;
