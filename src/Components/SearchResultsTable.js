import React, { useState } from "react";
import '../CSS/SearchResultsTable.css';

const SearchResultsTable = ({ results, onSelect }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const resultsPerPage = 5;
    let paginatedResults =  [...results];
    if(paginatedResults.length > 5)
      paginatedResults = results.slice(
        currentPage * resultsPerPage,
        (currentPage + 1) * resultsPerPage
      );
  
    const handlePrevious = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 1);
    };
  
    const handleNext = () => {
      if ((currentPage + 1) * resultsPerPage < results.length) setCurrentPage(currentPage + 1);
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedResults.map((contact, index) => (
              <tr key={index}>
                <td>{`${contact.firstName} ${contact.lastName}`}</td>
                <td>{contact.dateOfBirth}</td>
                <td>{contact.address}</td>
                <td>{contact.city}</td>
                <td>{contact.state}</td>
                <td>{contact.zipCode}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => onSelect(contact)}>Select</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button">
          <button onClick={handlePrevious} disabled={currentPage === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={(currentPage + 1) * resultsPerPage >= results.length}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchResultsTable;