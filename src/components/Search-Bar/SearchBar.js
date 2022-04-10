import React, {useState} from 'react'
import './SearchBar.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import {process} from './logicStuff.ts' 

function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);   

  return (
    <div className = "search">
        <div className="searchInputs">
            <input id="note" type="text" placeholder={placeholder}/>
            <div className="searchIcon">
                <button className="searchIcon" onClick={searchNote}>
                    <MusicNoteIcon/>
                </button>
            </div>
        </div>
        <div className="dataResult">
        </div>
    </div>
  )
}

function searchNote(){

    let note = "";

    if(document.getElementById("note") != null){
        note = document.getElementById("note").value;
    }

    const notes = ["a", "b", "c", "d", "e", "f"];

    if (notes.includes(note)){
        process('A');
        console.log("Success");
    } else {
        console.log("Error! :(");
    }
}

export default SearchBar