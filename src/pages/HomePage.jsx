import { Link } from "react-router-dom";
import AllBeersPage from "./AllBeersPage";

function HomePage() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, atque voluptatem. Dolores autem fugit nam!";
  return (
    <div style={{ textAlign: "center" }}>
      <Link to={"/beers"}>
        <img src="/src/assets/beers.png" />
        <h2>All Beers</h2>
        <p>{`${lorem}`}</p>
      </Link>
      <Link to={"/random-beer"}>
        <img src="/src/assets/random-beer.png" />
        <h2>Random Beer</h2>
        <p>{`${lorem}`}</p>
      </Link>
      <Link to={"/new-beer"}>
        <img src="/src/assets/new-beer.png" />
        <h2>New Beer</h2>
        <p>{`${lorem}`}</p>
      </Link>
    </div>
  );
}

export default HomePage;
