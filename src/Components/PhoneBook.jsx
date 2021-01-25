import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../Redux/contacts';

function PhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch(contactsOperations.addContact(name, number));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitForm}>
      <label className="label name">
        Enter name
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Jony Depp"
        />
      </label>
      <label className="label number">
        Еnter number
        <input
          type="tel"
          value={number}
          name="number"
          onChange={handleChange}
          placeholder="Number (7 to 9 digits)"
          pattern="[0-9]{7,9}"
          title="7 to 9 digits allowed"
        />
      </label>
      <button type="submit" className="addContact">
        Add contact
      </button>
    </form>
  );
}

export default PhoneBook;
