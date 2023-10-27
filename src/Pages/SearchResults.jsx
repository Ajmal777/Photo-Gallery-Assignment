import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Common/Loading";
import Gallery from "../Components/Gallery";
import fetchData from "../Functions/fetchData";
const Search = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState("");
  const { query } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetchData(query);
        setImages(res.data.results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getData();
  }, [query]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="header" style={{ margin: "0rem 5rem" }}>
            {query}
          </h1>
          <Gallery images={images} />
        </>
      )}
    </>
  );
};

export default Search;
