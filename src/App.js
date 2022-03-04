import { connect } from "react-redux";
import React, { useEffect } from "react";
import requestMaker from "./helpers/requestMaker";
import deleteOneCharacterHelper from "./helpers/DeleteOneCharacter";
import NavBar from "./Components/Navbar";
import { Link } from "react-router-dom";
import { BatchStorageSetter } from "./helpers/BatchStorageSetter";
import { BatchSplicer } from "./helpers/BatchSplicer";
import PropTypes from "prop-types";
import { BatchStorageGetter } from "./helpers/BatchStorageGetter";

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
  const batchResults = BatchStorageGetter(props);

  const handleRemove = (index) => {
    BatchSplicer(
      batchResults.names,
      batchResults.avatars,
      batchResults.ids,
      batchResults.jobs,
      batchResults.abouts,
      index
    );
    BatchStorageSetter(
      batchResults.names,
      batchResults.jobs,
      batchResults.ids,
      batchResults.avatars,
      batchResults.abouts
    );

    props.deleteOneCharacter(
      batchResults.names,
      batchResults.avatars,
      batchResults.jobs,
      batchResults.ids,
      batchResults.abouts
    );
  };

  useEffect(() => {
    const { requestMaker, name } = props;
    if (!props.isFetching && !name) {
      requestMaker();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    BatchStorageSetter(
      batchResults.names,
      batchResults.jobs,
      batchResults.ids,
      batchResults.avatars,
      batchResults.abouts
    );
  }, [
    batchResults.names,
    batchResults.jobs,
    batchResults.ids,
    batchResults.avatars,
    batchResults.abouts,
  ]);

  let i = -1;

  if (props.error) {
    return <div>Sorry something went wrong! {props.error.message}</div>;
  }
  return (
    <div className="container mb-3">
      <NavBar /> <h1 className="text-center fw-bold mt-3">Characters</h1>
      {batchResults.names ? (
        batchResults.names.map((name) => {
          i++;
          return (
            <div key={batchResults.ids[i]} className="card px-2">
              <div className="d-flex justify-content-between shadow align-items-center bg-light">
                {" "}
                <div className="my-3">
                  {" "}
                  <img
                    src={batchResults.avatars[i]}
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
                    about: batchResults.abouts[i],
                    avatar: batchResults.avatars[i],
                    job: batchResults.jobs[i],
                  }}
                  className="fw-bold"
                >
                  {name}
                </Link>
                <div> {batchResults.jobs[i]} </div>
                <div>
                  {" "}
                  <button
                    onClick={() =>
                      handleRemove(batchResults.names.indexOf(name))
                    }
                    className="btn btn-primary mx-5 text-uppercase fw-bold"
                    data-testid={i + "Delete"}
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
