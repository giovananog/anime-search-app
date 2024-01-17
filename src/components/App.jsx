import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';


function App(props) {
  function handleClick () {
    window.location.reload();
  }

  return (
    <div className="app-div">
      <Header className='app-header'/>
      <Cards filter={props.filter} info={props.info}></Cards>
      {!props.filter && <Button className="app-button" variant="outlined" endIcon={<NavigateNextIcon />} onClick={handleClick}> Next </Button>}
      <Footer />
    </div>
  );
}

export default App;
