import {useState} from "react";

function ApiCall({accessToken}){

const [searchInput, setSearchInput] = useState("");
const [artist,setArtist] = useState([]);
const [track, setTrack] = useState([]);
const [album, setAlbum] = useState([]);
const [error, setError] = useState('');
    
async function Search(){

   try {
    var artistParameters = {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken,
    }
    } 

     await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
    .then(response => response.json())
    .then (data =>  {setArtist(data.artists.items)})

    

    await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
    .then(response => response.json())
    .then (data =>  {console.log(data)})

    

    await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', artistParameters)
    .then(response => response.json())
    .then (data =>  {setTrack(data.tracks.items)})



     await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album', artistParameters)
    .then(response => response.json())
    .then (data =>  {setAlbum(data.albums.items)})

    } catch (error) {
    setError(error)
    console.error();
}
   
    console.log(artist);
    console.log(track)
    console.log(album)

    
    }
function HandleKeyDown(event) {
    
        if(event.keyCode === 13) { 
            console.log('Enter key pressed')
            event.preventDefault();
            Search(); 
      }
    
    }
return (
    <div>
        <div className="SearchBar2">
    <form onSubmit={Search} onKeyDown={HandleKeyDown}>
    <input type="text" onChange={e => setSearchInput(e.target.value)}/>
    <button type="button" onClick={Search} onSubmit={Search}>Search</button>
    </form>

    </div>
        {album.map( (album, i) => {
            return (
        <article className="grid">
            <h1>{album.name}</h1>
            <h3><em>{album.artists[0].name}</em></h3>
            <div className="parent">
            <img className="albumImage" src = {album.images[0].url}></img>
            <h4 className="releaseDate">Release Date: {album.release_date}<br/><a href = {album.images[0].url} target="_blank">Download Image</a><br/><a href={album.external_urls.spotify} target="_blank">Link to album</a></h4>
            </div>

        </article>
            )
        }
    )}
    {error ? <p>An error occurred: No search query</p> : null}
    </div>   
)}

export default ApiCall;