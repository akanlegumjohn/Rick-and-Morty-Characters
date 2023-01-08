import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Filter from './Filter';

function FilterIcon() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="modal--title">Choose an item </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Filter />
        </Modal.Body>
        <Modal.Footer className="modal--footer">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="modal--footer--btn"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className="modal--footer--btn"
          >
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FilterIcon;
