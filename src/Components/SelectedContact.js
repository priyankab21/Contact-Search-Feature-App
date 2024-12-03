import React from "react";
import '../CSS/SelectedContact.css'

const SelectedContact = ({ contact }) => {
  return (
    <div className="selectedContact">
      <h2>Selected Contact</h2>
      <p>Name: {`${contact.firstName} ${contact.lastName}`}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
    </div>
  );
};

export default SelectedContact;
