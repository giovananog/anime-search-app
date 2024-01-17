import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";


function App(props) {
  function handleClick () {
    window.location.reload();
  }

  return (
    <div className="app-div">
      <Header className='app-header'/>
      <Cards filter={props.filter} info={props.info}></Cards>
      <Footer />
    </div>
  );
}

export default App;
