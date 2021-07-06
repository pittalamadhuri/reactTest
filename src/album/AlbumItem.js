import React, { useState } from "react";
import "./AlbumItem.css";

function AlbumItem({ album, clickHandler }) {
    function showPics(event) {
        clickHandler(event.target.id);
    }

    return (<div className="album-item">
        <img id = {album.id} src={album.photos[0].thumbnailUrl} onClick={showPics}/>
        <h3>{album.title}</h3>
        </div>);
}


export default AlbumItem;
