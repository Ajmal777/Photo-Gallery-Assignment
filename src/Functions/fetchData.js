import axios from "axios";

const fetchData = async (q) => {
  const endpoint = q ? "/search" : "";
  const URL = `https://api.unsplash.com${endpoint}/photos`;

  try{
    const data = await axios.get(URL, {
        params: {
            query: q,
            per_page: 15        //reduce this so that the request limit per hour for unsplash API doesn't deplete quickly
        },
        headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_API_KEY_1}`,
        }
    });
    return data;
  }
  catch(err){
    console.log(err);
    return err;
  }
};

export default fetchData;
