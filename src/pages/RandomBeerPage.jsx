import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [beer, setBeer] = useState(null);

  const fetchOneRamdomBeer = async () => {
    const response = await fetch(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
    if (response.ok) {
      const oneBeer = await response.json();

      setBeer(oneBeer);
    }
  };

  useEffect(() => {
    fetchOneRamdomBeer();
  }, []);

  return beer ? (
    <div style={{ textAlign: "center" }}>
      <img
        src={beer.image_url}
        alt={`${beer.name} Image`}
        style={{ height: "22rem" }}
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

export default RandomBeersPage;
