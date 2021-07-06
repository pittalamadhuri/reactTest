import React, {
    useEffect
} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AlbumList from "./album/AlbumList";
import "./App.css";
import { removeOccurances } from "./helpers/helper";
import { fetchAlbums } from "./store/effects";
import { setAlbums } from "./store/reducers";
import { selectAlbums } from "./store/selectors";

function App() {
    const dispatch = useDispatch();
    const albums = useSelector(selectAlbums);
    const fetchData = async() => {
        const albums = await fetchAlbums();
        console.log('&& al', albums);
        const updatedAlbums = removeOccurances(albums);
        dispatch(setAlbums(updatedAlbums));
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (<div className="albums-app" >
        <h1> Albums (click on each thumbnail to view the photos in the Album) </h1>
        <AlbumList albums={albums}/>
    </div>);
};

export default App;