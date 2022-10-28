import { Button, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Item() {
  return (
    <Stack direction="horizontal" gap={4}>
      <input type="checkbox" id="topping" name="topping" value="Paneer" /> 
      <FontAwesomeIcon icon={['fas', 'square']} className='text-danger' />
      
      <text> item 2</text>
      <Button variant="outline-secondary" className="ms-auto"><FontAwesomeIcon icon={['far', 'trash-can']} className='text-danger' /></Button>
    </Stack>
  );
}

export default Item;
