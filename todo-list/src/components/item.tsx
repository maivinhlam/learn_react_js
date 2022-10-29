import React from "react";
import { Button, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons'
import { Todo } from "../features/todo-list/slice"
import { deleteTodo, editTodo } from '../features/todo-list/slice';
import { useAppDispatch } from '../store'

interface Props {
  todo: Todo;
}
const Item = React.memo(({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const setDone = () => {
    dispatch(editTodo({
      id: todo.id, value: todo.value, isDone: !todo.isDone
    }))
  }
  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }
  return (
    <Stack direction="horizontal" gap={4}>
      <input type="checkbox" id="topping" name="topping" value="Paneer" aria-label="check" />
      {todo.isDone
        ? <FontAwesomeIcon icon={faSquareCheck} className='text-success' onClick={setDone} id={todo.id} />
        : <FontAwesomeIcon icon={faSquare} className='text-danger' onClick={setDone} id={todo.id} />
      }
      {todo.isDone
        ? <p className="text-decoration-line-through mb-0"> {todo.value}</p>
        : <p className="text-decoration-none align-middle mb-0"> {todo.value}</p>
      }

      <Button variant="outline-secondary" className="ms-auto z-index-3" onClick={handleDelete} id={todo.id}>
        <FontAwesomeIcon icon={faTrashCan} className='text-danger z-index-1' />
      </Button>
    </Stack>
  );
});

export default Item;
