import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import CommentArea from "./components/CommentArea";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <Welcome />
              <Routes>
                <Route
                  path="/"
                  element={
                    <AllTheBooks
                      searchQuery={searchQuery}
                      setSelectedAsin={setSelectedAsin}
                      selectedAsin={selectedAsin}
                    />
                  }
                />
                <Route path="/book/:asin" element={<BookDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <div className="col-md-4 mt-5">
              <CommentArea asin={selectedAsin} />
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}
export default App;
