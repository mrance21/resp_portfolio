import Navbar from "./scenes/Navbar"
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  // this state determines what part of the navigation of the website we are at
  const [selectedPage, setSelectedPage] = useState('home')
  // this determines whether current browswer size min-width is less than or above 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      
    </div>
  );
}

export default App;
