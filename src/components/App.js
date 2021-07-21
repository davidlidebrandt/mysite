import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Teach from "./Teach";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
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
