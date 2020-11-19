import React, { useEffect, useState } from "react";

//import packages
import axios from "axios";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://localhost:3100/comics");
    console.log(response.data);
    setData(response.data);
    setIsloading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement...</p>
      ) : (
        <h1>{data.result[0].title}</h1>
      )}
      <h1>Personnages</h1>
    </div>
  );
};

export default Character;
