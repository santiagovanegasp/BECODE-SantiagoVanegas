import React from "react";


function TodoSearch({
  searchValue,
  setSearchValue
}) {

    return (
      <input 
      className="searchBar"
      value={searchValue} 
      type="text" 
      placeholder="Search todos"
      onChange={(event)=> {
        setSearchValue(event.target.value);
      } } 
      />
    )
  }


  export {TodoSearch};