import React from 'react';
import { useState } from "react";
import './SearchBar.css';

function SearchBar() {
    //query (een zoekterm noemt men een search query in het Engels)
    const [query, setQuery] = useState('');


  return (
    <form className="searchbar">
      <input
        type="text"
        name="search"
        // dit is de value voor dat de onchange is gebeurd, dus de waarde wordt opgehaald? of juist andersom?
       value={query}
        //De waarde wordt met eventlistener onChange aangepast naar wat in het input-veld staat.
         //e.target.value = E wordt de EVENT-functie aangeroepen, TARGET is het doelwit en dat wordt dus de VALUE, en in dit geval in VALUE de const query
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Zoek een stad in Nederland"
      />

      <button type="submit">
        Zoek
      </button>
    </form>
  );
}

export default SearchBar;
