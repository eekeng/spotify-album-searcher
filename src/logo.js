function Logo() {
  return (
    <div className="logo">
      <img src="spotify-logo-png-7053.png"></img>
    </div>
  )
}

function TitleText(){
  return (
    <div className="TitleText">
    <h1>Spotify Album Searcher</h1>
    </div>
  ) 
}

function SearchBar(){
  return (
    <div className="searchBar">
      <form>
      <select name="selectList" id="selectList">
       <option value="Artist">Artist</option>
       <option value="Song">Song</option>
       <option value="Album">Album</option>
       <option value="Podcast">Podcast</option>
      </select>
      <input type="text" name="search" style={{ margin: "1rem 0" }} />
      <button type="button" name="submitButton">Search</button>
      </form>
    </div>
  )
}

export {Logo, TitleText, SearchBar} ;
