import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);
  /* console.log(beerId); */

  const fetchOneBeer = async () => {
    const response = await fetch(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    if (response.ok) {
      const oneBeer = await response.json();

      setBeer(oneBeer);
    }
  };

  useEffect(() => {
    fetchOneBeer();
  }, []);

  /* if (!beer) {
    return <p>I am waiting for my beer</p>;
  } */

  return beer ? (
    <div style={{ textAlign: "center" }}>
      <img
        src={beer.image_url}
        alt={`${beer.name} Image`}
        style={{ height: "20rem" }}
      />
      <div>
        <h1>{beer.name}</h1>
        <h3>{beer.attenuation_level}</h3>
      </div>
      <div>
        <h2>{beer.tagline}</h2>
        <h3>{beer.first_brewed}</h3>
      </div>
      <h3>{beer.description}</h3>
      <p>{beer.contributed_by}</p>
    </div>
  ) : (
    <>
      <h1 style={{ textAlign: "center" }}>loading...</h1>
    </>
  );
}

export default BeerDetailsPage;
