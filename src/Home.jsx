import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      setImage(res.data.sprites.other.dream_world.front_default);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <img src={image} alt="Aquí va la imagen :D" />
      <img
        src="https://zoratamagallery.sfo3.cdn.digitaloceanspaces.com/Utilidades/logo.svg"
        alt="logo"
      />
    </div>
  );
};

export default Home;
