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
      placeholder="cut onions"
      onChange={(event)=> {
        setSearchValue(event.target.value);
      } } 
      />
    )
  }


  export {TodoSearch};