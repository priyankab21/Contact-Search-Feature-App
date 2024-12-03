import React, { useState } from 'react';
import SearchFilters from './Components/SearchFilters';
import SearchResultsTable from './Components/SearchResultsTable';
import SelectedContact from './Components/SelectedContact';
import contactsData from "./Components/Contacts.json";
import "./App.css";


const App = () => {
  const [filteredResults, setFilteredResults] = useState(contactsData);
 
  const [selectedContact, setSelectedContact] = useState(null);


const handleSearch = (filters) => {
  const results = contactsData.filter((contact) => {
    return (
      (!filters.firstName || contact.firstName.toLowerCase().includes(filters.firstName.toLowerCase())) &&
      (!filters.lastName || contact.lastName.toLowerCase().includes(filters.lastName.toLowerCase())) &&
      (!filters.dateOfBirth || contact.dateOfBirth === filters.dateOfBirth) &&
      (!filters.email || contact.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (!filters.phone || contact.phone.includes(filters.phone))
    );
  });
  setFilteredResults(results);
};

const handleSelect = (contact) => {
  setSelectedContact(contact);
};

return (
  <div className='App'>
    <h1>Contact Search Feature</h1>
    <div className='searchFilters'><SearchFilters onSearch={handleSearch} /></div>
    <SearchResultsTable results={filteredResults} onSelect={handleSelect} />
    {selectedContact && <SelectedContact contact={selectedContact} />}
  </div>
);
};

export default App;
