import React from "react";
import Search from "./Search";
import Body from "./Body.jsx";
import "../assets/css/app.css";

export default function App() {
  const [search, setSearch] = React.useState("");
  const [gifs, setGifs] = React.useState([]);

  async function handleChange(e) {
    setSearch(e.target.value);

    if (e.target.value.length > 3) {
      const response = await fetch(
        `https://g.tenor.com/v1/search?q=${e.target.value}&key=LIVDSRZULELA&limit=8`
      )
        .then((response) => {
          return response.json().then((res) => res);
        })
        .catch((err) => {
          console.log(err);
        });
      setGifs(response.results);
    }
  }

  return (
    <div className="app">
      <Search handleChange={handleChange} search={search} />
      <Body emoji={search} gifs={gifs} />
    </div>
  );
}
