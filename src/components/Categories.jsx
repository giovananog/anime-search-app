import { React } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";


function Categories() {
  const { name } = useParams();

  return (
    <div className="app-div">
      <Header className='app-header'/>
      <Cards filter='categories' info={name}></Cards>
      <Footer />
    </div>
  );
}

export default Categories;
