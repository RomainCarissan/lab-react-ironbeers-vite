import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level(0);
        setContributed_by("");
        navigate("/");
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add new beer</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline </label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </div>
        <div>
          <label htmlFor="description">Desription </label>
          <textarea
            type="text"
            name="description"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed </label>
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => setFirst_brewed(e.target.value)}
            value={first_brewed}
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewer's Tips </label>
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => setBrewers_tips(e.target.value)}
            value={brewers_tips}
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level </label>
          <input
            type="number"
            name="attenuation_level"
            onChange={(e) => setAttenuation_level(e.target.value)}
            value={attenuation_level}
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed by </label>
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => setContributed_by(e.target.value)}
            value={contributed_by}
          />
        </div>
        <button type="submit">add beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
