import NavBar from "./Navbar";
import { connect } from "react-redux";
import addOneCharacterHelper from "../helpers/AddOneCharacterHelper";
import { useState } from "react";
import { LocalStorageGetter } from "../helpers/LocalStorageGetter";
import { BatchStorageSetter } from "../helpers/BatchStorageSetter";
import { useNavigate } from "react-router-dom";
import { BatchPusher } from "../helpers/BatchPusher";
import PropTypes from "prop-types";

const mapDispatchToProps = (dispatch) => ({
  addOneCharacter: (names, jobs, avatars, ids, abouts) =>
    dispatch(addOneCharacterHelper(names, jobs, avatars, ids, abouts)),
});

const Form = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    let i = LocalStorageGetter("ids")?.slice(-1);

    e.preventDefault();
    const names = LocalStorageGetter("names");
    const jobs = LocalStorageGetter("jobs");
    const ids = LocalStorageGetter("ids");
    const avatars = LocalStorageGetter("avatars");
    const abouts = LocalStorageGetter("abouts");

    BatchPusher(
      names,
      fullName,
      jobs,
      jobTitle,
      avatars,
      image,
      abouts,
      aboutState,
      i,
      ids
    );
    BatchStorageSetter(names, jobs, ids, avatars, abouts);

    props.addOneCharacter(names, jobs, avatars, ids, abouts);
    navigate("/");
  };

  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [aboutState, setAbout] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="container">
      <NavBar />
      <form className="w-50 mx-auto mt-3 card p-4 shadow shadow-lg">
        <div className="form-group">
          <label htmlFor="FullName">Name Surname</label>
          <input
            type="text"
            className="form-control"
            id="FullName"
            data-testid="FullName"
            placeholder="Enter the Characters Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll add this character to our list!
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="JobTitle">Job Title</label>
          <input
            type="text"
            className="form-control"
            id="JobTitle"
            data-testid="JobTitle"
            placeholder="Enter the Characters Job Title"
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="About">About Him/Her</label>
          <textarea
            className="form-control"
            id="About"
            data-testid="About"
            rows="3"
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="ImageLink">Image Link</label>
          <input
            type="text"
            className="form-control"
            id="ImageLink"
            data-testid="ImageLink"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4"
          data-testid="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  isFetching: PropTypes.bool,
  name: PropTypes.instanceOf(Array),
  requestMaker: PropTypes.func,
  avatar: PropTypes.instanceOf(Array),
  job: PropTypes.instanceOf(Array),
  id: PropTypes.instanceOf(Array),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  about: PropTypes.instanceOf(Array),
};
export default connect(null, mapDispatchToProps)(Form);
