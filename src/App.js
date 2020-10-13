import React from "react"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";


import "./App.css";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Landing />
          <Footer />
        </div>
    );
  }
}

export default App;
