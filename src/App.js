import { connect } from "react-redux";
import React, { useEffect } from "react";
import requestMaker from "./helpers/requestMaker";
import { LocalStorageGetter } from "./helpers/LocalStorageGetter";
import deleteOneCharacterHelper from "./helpers/DeleteOneCharacter";
import NavBar from "./Components/Navbar";
import { Link } from "react-router-dom";
import { BatchStorageSetter } from "./helpers/BatchStorageSetter";
import { BatchSplicer } from "./helpers/BatchSplicer";
import PropTypes from "prop-types";

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
    BatchSplicer(names, avatars, ids, jobs, abouts, index);
    BatchStorageSetter(names, jobs, ids, avatars, abouts);

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
    BatchStorageSetter(names, jobs, ids, avatars, abouts);
  }, [names, jobs, ids, avatars, abouts]);

  let i = -1;

  if (props.error) {
    return <div>Sorry something went wrong! {props.error.message}</div>;
  }
  return (
    <div className="container mb-3">
      <NavBar /> <h1 className="text-center fw-bold mt-3">Characters</h1>
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
                    data-testid="Delete"
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

App.propTypes = {
  isFetching: PropTypes.bool,
  name: PropTypes.instanceOf(Array),
  requestMaker: PropTypes.func,
  avatar: PropTypes.instanceOf(Array),
  job: PropTypes.instanceOf(Array),
  id: PropTypes.instanceOf(Array),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  about: PropTypes.instanceOf(Array),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
