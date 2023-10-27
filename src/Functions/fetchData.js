import axios from "axios";

const fetchData = async (q) => {
  const endpoint = q ? "/search" : "";
  const URL = `https://api.unsplash.com${endpoint}/photos`;

  console.log(URL);

  try{
    const data = await axios.get(URL, {
        params: {
            query: q,
            per_page: 10
        },
        headers: {
            Authorization: 'Client-ID JRXIy2Ey4-qunIK78bNkqzpbs9PLvze7OoXHZUbEWBA'
        }
    });
    console.log(data);
    return data;
  }
  catch(err){
    console.log(err);
    return err;
  }
};

export default fetchData;
