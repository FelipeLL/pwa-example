import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://mapzoratama.herokuapp.com/api/auth");
      console.log(res.data);
      setImage(res.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>{image.isToken}</h2>
      {/* <img src={image} alt="Aquí va la imagen :D" /> */}
      <img
        src="https://i.picsum.photos/id/1050/200/300.jpg?hmac=mMZp1DAD5EpHCZh-YBwfvrg5w327V3DoJQ8CmRAKF70"
        alt="logo"
      />
    </div>
  );
};

export default Home;
