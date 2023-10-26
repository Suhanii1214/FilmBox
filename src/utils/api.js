import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmMyZGExMWZiNzkwYWY2ZmIwYjY0YTRjYWYwNjNhMSIsInN1YiI6IjY1MzUzZTZhYzE0ZmVlMDBjNmVlMzc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9FQO-qx4gRujVG_JZrGIE2Xw7QZvXXArPYco6qO6wY4";

const headers = {
    Authorization: "Bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error);
        return error;
    }
}