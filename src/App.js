import "./App.css";
import { connect } from "react-redux";
// import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect } from "react";
import requestMaker from "./helpers/requestMaker";
import { LocalStorageSetter } from "./helpers/LocalStorageSetter";
import { LocalStorageGetter } from "./helpers/LocalStorageGetter";

const mapStateToProps = (state) => {
  const { name, avatar, job, id, isFetching, error } =
    state.FetchAllCharactersReducer;

  return {
    name,
    avatar,
    job,
    id,
    isFetching,
    error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestMaker: () => dispatch(requestMaker()),
  // reqMakerForPokemon: (url) => dispatch(reqMakerForPokemon(url)),
});

function App(props) {
  const names = LocalStorageGetter("names") || props.name;
  const avatars = LocalStorageGetter("avatars") || props.avatar;
  const ids = LocalStorageGetter("ids") || props.id;
  const jobs = LocalStorageGetter("jobs") || props.job;

  const handleRemove = (index) => {
    names.splice(index, 1);
    LocalStorageSetter("names", names);
    window.location.reload();
  };

  useEffect(() => {
    const { requestMaker } = props;
    if (!props.isFetching) {
      requestMaker();
    }
  }, []);

  useEffect(() => {
    LocalStorageSetter("names", names);
    LocalStorageSetter("jobs", jobs);
    LocalStorageSetter("ids", ids);
    LocalStorageSetter("avatars", avatars);
  }, [names, jobs, ids, avatars]);

  let i = -1;
  return (
    <div>
      {" "}
      {names ? (
        names.map((name) => {
          i++;
          return (
            <div key={ids[i]} className="d-flex">
              {" "}
              <div className="image-container">
                {" "}
                <img
                  src={avatars[i]}
                  alt={`Simpson ${name}`}
                  width="50"
                  height="50"
                />{" "}
              </div>
              <div className="name-container"> {name} </div>
              <div>
                {" "}
                <button onClick={() => handleRemove(names.indexOf(name))}>
                  Delete
                </button>{" "}
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading </div>
      )}{" "}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
