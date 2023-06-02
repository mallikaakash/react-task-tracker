import Header from "./components/Header";
import Tasks from "./components/Tasks.js";
import { useState } from "react";

const App = () => {
  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks />
    </div>
  );
};

export default App;
