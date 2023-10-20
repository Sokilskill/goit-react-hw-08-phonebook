import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from 'redux/selector';
import { deleteContact, fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(selectVisibleContacts);
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    console.log('забираю контакти');
    dispatch(fetchContacts());
  }, [dispatch]);

  return isLoading && !error ? (
    <p>Loading...</p>
  ) : (
    <ul className={css.list}>
      {items &&
        contactsList.map(contact => {
          const { id, name, number } = contact;
          return (
            <li className={css.item} key={id}>
              <p>
                {name}: {number}
              </p>

              <button
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
