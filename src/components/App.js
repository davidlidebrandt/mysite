import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Teach from "./Teach";
import { useEffect, useRef, useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {

  const [linkToMessage, setLinkToMessage] = useState(false);
 
  useEffect(() => {

  document.addEventListener("scroll", function() {
    
      if ((document.querySelector(".message-div") != null) && (document.querySelector(".message-div").getBoundingClientRect().top >= 0 || 
      document.querySelector(".message-div").getBoundingClientRect().left >= 0 ||
      document.querySelector(".message-div").getBoundingClientRect().bottom <= window.innerHeight ||
       document.querySelector(".message-div").getBoundingClientRect().right <= window.innerWidth)) {
        document.querySelector(".message-div").classList.add("message-animation")
    }
  
  })
 }, [])
  
 return (
    <div className="App bg-darker-green">
      <Header></Header> 
       
      <div className="bg-image min-h-screen p-2 md:x-10 xl:mx-36 custom-box-shadow-2 xl:px-10">  
      <Switch>
        <Route path="/" exact>
          <Home linkToMessage={linkToMessage} setLinkToMessage={setLinkToMessage}></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/aboutme">
          <About></About>
        </Route>
        <Route path="/techstack">
          <Teach></Teach>
        </Route>
        </Switch>
      </div>
    <Footer setLinkToMessage={setLinkToMessage}></Footer>
    </div>
  );
}

export default App;
