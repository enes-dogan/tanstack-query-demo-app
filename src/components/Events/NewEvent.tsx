import { Link, useNavigate } from 'react-router-dom';
import { formDataType } from '../../types.ts';

import Modal from '../UI/Modal.tsx';
import EventForm from './EventForm.tsx';

export default function NewEvent() {
  const navigate = useNavigate();

  function handleSubmit(formData: formDataType) {
    console.log(formData);
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
      </EventForm>
    </Modal>
  );
}
