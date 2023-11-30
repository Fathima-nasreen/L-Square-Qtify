import axios from "axios";

export const BACKEND_POINT = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbum = async() => {
    try {
        const response = await axios.get(`${BACKEND_POINT}/albums/top`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchNewAlbum = async() => {
    try {
        const response = await axios.get(`${BACKEND_POINT}/albums/new`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}