import React, {useState} from "react";

function Search() {

  const [searchInput, setSearchInput]=useState("")

  function controlSearchInput(e){
    setSearchInput(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={controlSearchInput} className="prompt" />
        <i className="search icon" />
      </div>
      <div>i can delete this div {searchInput}</div>
    </div>
  );
}

export default Search;
