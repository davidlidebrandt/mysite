import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>  
      <div className="bg-image min-h-screen">
      <BrowserRouter>
      <Switch>
        <Route to="/">
          <Home></Home>
        </Route>
       
        </Switch>
        </BrowserRouter>
      </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
