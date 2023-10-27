import { useEffect, useState } from "react";
import Search from "../Components/Search";
import Gallery from "../Components/Gallery";
import Loading from "../Components/Common/Loading";
import fetchData from "../Functions/fetchData";
import Error from "../Components/Common/Error";

function Home() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      try {
        const res = await fetchData();
        setImages(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.log(err);
      }
    }

    loadImages();
  }, []);

  return (
    <>
      {loading && 
        <Loading />}
      {error && <Error error={error} />}
      { !loading && !error &&
        <>
          <Search />
          <Gallery images={images} />
        </>
      }
    </>
  );
}

export default Home;
