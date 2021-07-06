import {
    getApi
} from "../api/backend"
import {
    BASE_URL
} from "../helpers/constants"

export const fetchAlbums = async () => {
    const titles = await getApi(`${BASE_URL}/albums`);
    const photos = await getApi(`${BASE_URL}/photos`);
    const albums = titles.map(album => {
        return {
            ...album,
            photos: photos.filter(photo => photo.albumId === album.id)
        }
    });
    return albums;
}