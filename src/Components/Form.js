import NavBar from "./Navbar";
import { connect } from "react-redux";
import addOneCharacterHelper from "../helpers/AddOneCharacterHelper";
import { useState } from "react";
import { LocalStorageGetter } from "../helpers/LocalStorageGetter";
import { LocalStorageSetter } from "../helpers/LocalStorageSetter";
import { useNavigate } from "react-router-dom";

const mapDispatchToProps = (dispatch) => ({
  addOneCharacter: (names, jobs, avatars, ids, abouts) =>
    dispatch(addOneCharacterHelper(names, jobs, avatars, ids, abouts)),
});

let i = 200;

const Form = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const names = LocalStorageGetter("names");
    const jobs = LocalStorageGetter("jobs");
    const ids = LocalStorageGetter("ids");
    const avatars = LocalStorageGetter("avatars");
    const abouts = LocalStorageGetter("abouts");

    names.push(fullName);
    jobs.push(jobTitle);
    avatars.push(image);
    abouts.push(aboutState);
    i++;
    ids.push(i.toString());
    LocalStorageSetter("names", names);
    LocalStorageSetter("jobs", jobs);
    LocalStorageSetter("ids", ids);
    LocalStorageSetter("avatars", avatars);
    LocalStorageSetter("abouts", abouts);

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
            placeholder="Enter the Characters Job Title"
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="About">About Him/Her</label>
          <textarea
            className="form-control"
            id="About"
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
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4"
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

export default connect(null, mapDispatchToProps)(Form);
