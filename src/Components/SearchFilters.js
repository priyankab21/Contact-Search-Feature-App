import React, { useState } from "react";
import '../CSS/SearchFilters.css'

const SearchFilters = ({onSearch}) =>{

const [filters,setFormData] = useState({

    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...filters, [name]: value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "10px" }}>
  <div className='searchFields'>
  <input
        type="text"
        name="firstName"
        className="input-spacing"
        placeholder="First Name"
        value={filters.firstName}
        style={{ marginRight: "10px" }}
        onChange={handleChange}
      />
  </div>
      
      <input
        type="text"
        name="lastName"
        className="input-spacing"
        placeholder="Last Name"
        value={filters.lastName}
        style={{ marginRight: "10px" }}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dateOfBirth"
        value={filters.dateOfBirth}
        style={{ marginRight: "10px" }}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={filters.email}
        style={{ marginRight: "10px" }}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        className="input-spacing"
        placeholder="Phone Number"
        value={filters.phone}
        style={{ marginRight: "10px" }}
        onChange={handleChange}
      />
      <button type="submit" style={{backgroundColor:"orange"}}>Search</button>
      </div>

    </form>
  );

};
  
export default SearchFilters;
