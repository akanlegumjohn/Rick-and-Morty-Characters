import Button from 'react-bootstrap/Button';

function Spinner() {
  return (
    <Button variant="gray">
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  );
}

export default Spinner;
