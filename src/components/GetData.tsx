import { useEffect, useState } from "react";
import axios from "axios";

function GetData() {
  const [post, setPost] = useState([]);
  const KEY = "3776781c8aea2e47d76bd18d3b21e3d2";
  const url = "https://api.themoviedb.org/3/movie"
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    axios
      .get(`${url}/popular?api_key=${KEY}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data.results); // Set post to the results array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {post.map((item) => {
        return (
          <div key={item.id}> {/* Use item.id for a unique key */}
            <p>{item.title}</p> {/* Display movie title */}
            <p className="text-white">{item.popularity}</p> {/* Display movie title */}
            <img src={`${imageBaseUrl}${item.poster_path}`}/>
          </div>
        );
      })}
    </div>
  );
}

export default GetData;
