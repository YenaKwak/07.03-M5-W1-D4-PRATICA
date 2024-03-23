import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import CommentArea from "./components/CommentArea";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <div className="App">
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <Welcome />
            <AllTheBooks
              searchQuery={searchQuery}
              setSelectedAsin={setSelectedAsin}
              selectedAsin={selectedAsin}
            />
          </div>
          <div className="col-md-4 mt-5">
            <CommentArea asin={selectedAsin} />
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
export default App;
