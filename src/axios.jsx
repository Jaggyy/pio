import axios from "axios";

const basurl = axios.create({
    baseURL: "https://newsapi.org/v2"
})

export default basurl