import React from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({ renderContacts, deleteContact }) => {
  return (
    <ul>
      {renderContacts.map(el => {
        return (
          <li key={el.id}>
            {el.name}: {el.number}
            <button type="button" id={el.id} onClick={deleteContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  renderContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
