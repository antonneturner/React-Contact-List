import React from "react";

class AddContact extends React.Componet {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <form className="ui main">
            <div className="field">
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <button className="ui button blue">Add</button>
          </form>
        </form>
      </div>
    );
  }
}

export default AddContact;
