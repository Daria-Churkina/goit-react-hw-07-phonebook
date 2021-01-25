import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../Redux/contacts';

function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getShownContacts);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  if (contacts.length) {
    return (
      <ul className="contactList">
        {contacts.map(({ id, name, number }) => (
          <li className="contactItem" key={id}>
            <p>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
              className="deleteContactButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <h3>Add new contacts</h3>;
  }
}

export default ContactsList;
