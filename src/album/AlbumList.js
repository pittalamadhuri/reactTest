import React, { useState } from "react";
import AlbumItem from "./AlbumItem";
import "./AlbumList.css";

function AlbumList({ albums }) {
    const [clickedAlbum, updateClickedAlbum] = useState();
    function albumClicked(id){
        updateClickedAlbum(id);
    }
    return (
        <ul className="album-list">
            {
                albums.map(album => (
                    <div key={album.id}>
                        <AlbumItem album={album} clickHandler={albumClicked}/>
                        {(album.id == clickedAlbum) && album.photos.map(photo => <img src={photo.thumbnailUrl} ></img>)}
                    </div>
                ))
            }
        </ul>
    );
}

export default AlbumList;
