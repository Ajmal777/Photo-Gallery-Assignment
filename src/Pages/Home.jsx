import { useEffect, useState } from "react";
import Search from "../Components/Search";
import Gallery from "../Components/Gallery";
import Loading from "../Components/Common/Loading";
import fetchData from "../Functions/fetchData";

function Home() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState("");

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      try {
        const res = await fetchData();
        setImages(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }

    loadImages();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search />
          <Gallery images={images} />
        </>
      )}
    </>
  );
}

export default Home;
