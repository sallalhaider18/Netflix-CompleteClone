import axios from "axios";

const BASE_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzNkMGVmOGVmMGFjMzMwNmIwYzQ3NTExMzcyMzQ1NSIsInN1YiI6IjY0OTBhZWFlYzJmZjNkMDBmZmJjZGUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BIuWnK_1G62T5MHLVGyiGpDY1qwX1K_E8yu8Ijh36oM";
const BASE_URL = "https://api.themoviedb.org/3/";

const headers = {
    Authorization: "bearer " + BASE_TOKEN,
};

const fetchDataFromApi = async (url, params) => {
    try {
        const data  = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
export default fetchDataFromApi;