import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ConctactList from "./ContactList";
function App() {
  const contacts = [
    {
      id: "1",
      name: "James ",
      email: "james@gmail.com",
    },

    {
      id: "2",
      name: "charles",
      email: "charles@gmail.com",
    },
  ];
  return (
    <div>
      <div className="ui container"></div>
      <Header />
      <AddContact />
      <ConctactList contacts={contacts} />
    </div>
  );
}

export default App;
