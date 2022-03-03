import { useLocation } from "react-router-dom";
import NavBar from "./Navbar";

const Details = (state) => {
  const location = useLocation();
  const from = location.state;

  console.log(from);
  return (
    <div>
      <NavBar />
      <div>
        <img
          src={from.avatar}
          alt={`Simpson ${from.name}`}
          width="300"
          height="300"
        />
      </div>
      <div>{from.name}</div>
      <div>{from.about}</div>
    </div>
  );
};

export default Details;
