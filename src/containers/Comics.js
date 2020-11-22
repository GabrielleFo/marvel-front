import React, { useEffect, useState } from "react";

//import packages
import axios from "axios";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://backend-marvel-gaby.herokuapp.com/comics"
      );
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
        <div className="container-comics">
          {data.results.map((elem, id) => {
            return (
              <div className="comics">
                <FontAwesomeIcon icon="star" className="icons" />
                <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt={elem.title}
                />
                <h3>{elem.title}</h3>
                <p>
                  {elem.description && elem.description.slice(0, 250) + "..."}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comics;
