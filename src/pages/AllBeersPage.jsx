import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        //console.log(response.data);
        setAllBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {allBeers.map((beer) => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <img
              src={beer.image_url}
              alt={`${beer.name} Image`}
              style={{ height: "20rem" }}
            />
            <h1>{beer.name}</h1>
          </Link>
          <h2>{beer.tagline}</h2>
          <p>Created by: {beer.contributed_by}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
