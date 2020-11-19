import React, { useEffect, useState } from "react";

//import packages
import axios from "axios";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3100");
      console.log(response.data);
      setData(response.data);
      setIsloading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement...</p>
      ) : (
        <div>
          <h1>Personnages</h1>
          {/* <h1>{data.results[0].name}</h1> */}
          {data.results.map((elem, id) => {
            return (
              <>
                <p>{elem.name}</p>
                <img src={elem.ressourceURI} alt={elem.name} />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Character;
