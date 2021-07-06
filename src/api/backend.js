import axios from "axios";

export const getApi = async(url) => {
    const resp = await axios.get(url);
    return resp.data;
}