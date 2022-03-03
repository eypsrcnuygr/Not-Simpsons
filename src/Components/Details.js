import { useLocation } from "react-router-dom";
import NavBar from "./Navbar";

const Details = () => {
  const location = useLocation();
  const from = location.state;

  return (
    <div className="text-center container">
      <NavBar />
      <div className="card w-50 mx-auto shadow shadow-lg mt-3 p-3">
        <div>
          <img
            src={from.avatar}
            alt={`Simpson ${from.name}`}
            width="300"
            height="300"
          />
        </div>
        <div className="mt-3 fw-bold">{from.name}</div>
        <div>{from.job}</div>
        <div className="mt-5">
          <p>{from.about}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Details;
