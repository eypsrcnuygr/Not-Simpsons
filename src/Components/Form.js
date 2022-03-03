import NavBar from "./Navbar";

const Form = () => {
  return (
    <div className="container">
      <NavBar />
      <form className="w-50 mx-auto mt-3">
        <div className="form-group">
          <label for="FullName">Name Surname</label>
          <input
            type="text"
            className="form-control"
            id="FullName"
            placeholder="Enter the Characters Name"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll add this character to our list!
          </small>
        </div>
        <div className="form-group">
          <label for="JobTitle">Job Title</label>
          <input
            type="text"
            className="form-control"
            id="JobTitle"
            placeholder="Enter the Characters Job Title"
          />
        </div>
        <div className="form-group">
          <label for="About">About Him/Her</label>
          <textarea class="form-control" id="About" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label for="ImageLink">Image Link</label>
          <input type="text" className="form-control" id="ImageLink" />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
