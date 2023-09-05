import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nowweather from "./Nowweather";
import SearchBar from "./SearchBar";


function App() {

  return (
    <div className="container">
    {/* <SearchBar /> */}
    <Header />
    <Nowweather />
    <Footer />

    </div>
   
  );
}

export default App;
