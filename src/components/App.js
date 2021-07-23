import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Teach from "./Teach";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
 
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
    <div className="App">
      <BrowserRouter>
      <Header></Header>  
      <div className="bg-image min-h-screen">  
      <Switch>
        <Route path="/" exact>
          <Home></Home>
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
    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
