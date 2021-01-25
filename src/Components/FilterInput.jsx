import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../Redux/contacts';

function FilterInput() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const filterInput = e => {
    dispatch(contactsActions.filterContact(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} name="filter" onChange={filterInput} />
    </label>
  );
}

export default FilterInput;
