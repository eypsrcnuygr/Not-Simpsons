import { connect } from "react-redux";
import React, { useEffect } from "react";
import requestMaker from "./helpers/requestMaker";
import { LocalStorageSetter } from "./helpers/LocalStorageSetter";
import { LocalStorageGetter } from "./helpers/LocalStorageGetter";
import deleteOneCharacterHelper from "./helpers/DeleteOneCharacter";
import NavBar from "./Components/Navbar";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  const { name, avatar, job, id, isFetching, error, about } =
    state.FetchAllCharactersReducer;

  return {
    name,
    avatar,
    job,
    id,
    isFetching,
    error,
    about,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestMaker: () => dispatch(requestMaker()),
  deleteOneCharacter: (names, jobs, avatars, ids, abouts) =>
    dispatch(deleteOneCharacterHelper(names, jobs, avatars, ids, abouts)),
});

function App(props) {
  const names = LocalStorageGetter("names") || props.name;
  const avatars = LocalStorageGetter("avatars") || props.avatar;
  const ids = LocalStorageGetter("ids") || props.id;
  const jobs = LocalStorageGetter("jobs") || props.job;
  const abouts = LocalStorageGetter("abouts") || props.about;

  const handleRemove = (index) => {
    names.splice(index, 1);
    avatars.splice(index, 1);
    ids.splice(index, 1);
    jobs.splice(index, 1);
    abouts.splice(index, 1);
    LocalStorageSetter("names", names);
    LocalStorageSetter("jobs", jobs);
    LocalStorageSetter("ids", ids);
    LocalStorageSetter("avatars", avatars);
    LocalStorageSetter("abouts", abouts);

    props.deleteOneCharacter(names, avatars, jobs, ids, abouts);
  };

  useEffect(() => {
    const { requestMaker, name } = props;
    if (!props.isFetching && !name) {
      requestMaker();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    LocalStorageSetter("names", names);
    LocalStorageSetter("jobs", jobs);
    LocalStorageSetter("ids", ids);
    LocalStorageSetter("avatars", avatars);
    LocalStorageSetter("abouts", abouts);
  }, [names, jobs, ids, avatars, abouts]);

  let i = -1;

  if (props.error) {
    return <div>Sorry something went wrong! {props.error.message}</div>;
  }
  return (
    <div className="container mb-3">
      <NavBar />{" "}
      {names ? (
        names.map((name) => {
          i++;
          return (
            <div key={ids[i]} className="card px-2">
              <div className="d-flex justify-content-between shadow align-items-center bg-light">
                {" "}
                <div className="my-3">
                  {" "}
                  <img
                    src={avatars[i]}
                    alt={`Simpson ${name}`}
                    width="50"
                    height="50"
                    className="mx-5"
                  />{" "}
                </div>
                <Link
                  to="/details"
                  state={{
                    name: name,
                    about: abouts[i],
                    avatar: avatars[i],
                    job: jobs[i],
                  }}
                  className="fw-bold"
                >
                  {name}
                </Link>
                <div> {jobs[i]} </div>
                <div>
                  {" "}
                  <button
                    onClick={() => handleRemove(names.indexOf(name))}
                    className="btn btn-primary mx-5 text-uppercase fw-bold"
                  >
                    Delete
                  </button>{" "}
                </div>{" "}
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
