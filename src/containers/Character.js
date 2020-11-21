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
          {/* <h1>{data.results[0].name}</h1> */}
          {data.results.map((elem, id) => {
            const keys = Object.keys(elem);
            return (
              <>
                <Link to="/CharacterCommics/:id">
                  <div className="character">
                    {/* <p key={id}>
                      {keys[4]}{" "}
                      {(elem.thumbnail[keys[0]], elem.thumbnail[keys[1]])}
                    </p> */}

                    <img src={elem.thumbnail.path} alt={elem.name} />
                    <h1>{elem.name}</h1>
                    <p>{elem.description}</p>

                    <FontAwesomeIcon icon="star" className="icons" />
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Character;
