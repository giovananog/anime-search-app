import { React } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";


function Search() {
  const { search } = useParams();

  return (
    <div className="app-div">
      <Header className='app-header'/>
      <Cards filter='text' info={search}></Cards>
      <Footer />
    </div>
  );
}

export default Search;
