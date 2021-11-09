import React from "react";

class AddContact extends React.Componet {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field"></div>
          <label>Name</label>
          <imput type="text" name="name" placeholder="Name" />
        </form>
      </div>
    );
  }
}

export default AddContact;
