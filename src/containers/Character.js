import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import packages
import axios from "axios";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://backend-marvel-gaby.herokuapp.com/"
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
        <div className="container-character">
          {data.results.map((elem, id) => {
            return (
              <>
                <div className="character">
                  <FontAwesomeIcon
                    icon="star"
                    className="icons"
                    // onClick={() => {
                    //   // alert("Cliqué !");
                    // }}
                  />
                  <Link to="/CharacterCommics/:id">
                    <img
                      src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                      alt={elem.name}
                    />

                    <h1>{elem.name}</h1>
                    <p>{elem.description}</p>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Character;
