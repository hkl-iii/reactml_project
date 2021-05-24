import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

import SearchBar from './components/search-bar';
import SongForm from './components/song-form';
import MusicTable from './components/music-table';

function App() {
  const [searchText, setSearchText] = useState('');
  const [tableData, setTableData] = useState([]);
  
  const searchSong = (t) => {
    setSearchText(t);
  }

  const handleAdd = (song) => {
    console.log(song)
  }

  return (
    <div className="App">
      <h1>Music Library React Project</h1>
      <br />
      <SongForm onAdd={(song)=>handleAdd(song)}/>
      <br />
      <SearchBar value={searchText} onChange={(t)=>searchSong(t)}/>
      <br />
      <MusicTable search={searchText} data={tableData}/>
    </div>
  );
}

export default App;
